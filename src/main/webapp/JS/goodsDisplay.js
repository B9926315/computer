new Vue({
    el: '#app',
    mounted() {
//当页面加载完成之后执行的函数
        this.selectSingleGoods();
    },
    data() {
        var checkNumber = (rule, value, callback) => {
            if (value > this.brand.inventory) {
                callback(new Error('库存不足'));
            }  else {
                callback();
            }
        };
        return {
            //数选器
            num:1,
            //初始状态购买对话框为隐藏
            dialogVisible: false,
            brand: {
                id: '',
                brands: '',
                name: '',
                price: '',
                inventory: '',
                description: '',
                images: '',
            },
            //提交商品订单
            GoodsOrder:{
                goodsName:'',
                goodsId:'',
                number:'1',
                name:'',
                address:'',
                phone:'',
                payTime:'',
                orderNumber:'',
                username:'',
                status:'1',
            },
            //提交购买订单验证规则
            rules: {
                name: [
                    { required: true, message: '请输入收货人姓名', trigger: 'blur' },
                ],
                phone: [
                    { required: true, message: '请输入电话号码', trigger: 'blur' },
                    { pattern:/^1[0-9]{10}$/, message: '请输入正确的电话号码', trigger: 'blur' }
                ],
                address: [
                    {  required: true, message: '请输入地址', trigger: 'blur' }
                ],
                number: [
                    { validator: checkNumber, trigger: 'change' }
                ],
            }
        };
    },
    methods: {
        //用户购买商品订单
        submitForm(GoodsOrder) {
            this.$refs[GoodsOrder].validate((valid) => {
                if (valid) {
                    this.GoodsOrder.goodsId=this.brand.id;
                    this.GoodsOrder.goodsName=this.brand.brands+this.brand.name;
                    this.GoodsOrder.payTime=getFormatDateTime();
                    this.GoodsOrder.orderNumber=this.brand.id+new Date().getTime();
                    this.GoodsOrder.username=this.getUsername();
                    console.log(this.GoodsOrder);
                    axios({
                        method:'post',
                        url:'http://localhost:8080/computer/brand/addGoodsOrder',
                        data:this.GoodsOrder
                    }).then(resp=>{
                        if (resp.data=='addOrderSucceed'){
                            this.dialogVisible=false;
                            this.selectSingleGoods();
                            this.$message({
                                message: '购买成功',
                                type: 'success'
                            });
                        }
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        getUsername(){
            var username1=sessionStorage.getItem("username");
            return username1;
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        selectSingleGoods() {
            let search = location.search;
            let split = search.split("=");
            axios({
                method: 'get',
                url: 'http://localhost:8080/computer/brand/selectGoodsById?id='+split[1]
            }).then(resp=>{
                this.brand=resp.data;
            })
        },
        dataRefreh() {
            // 计时器正在进行中，退出函数
            if (this.intervalId != null) {
                return;
            }
            // 计时器为空，操作
            this.intervalId = setInterval(() => {
                this.selectSingleGoods(); //加载数据函数
            }, 1000);
        },
        // 停止定时器
        clear() {
            clearInterval(this.intervalId); //清除计时器
            this.intervalId = null; //设置为null
        },
    },
    created(){
        this.dataRefreh();
    },
    destroyed(){
        // 在页面销毁后，清除计时器
        this.clear();
    }
})
//得到格式化的日期
function getFormatDateTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    return [year, '-', month, '-', day, ' ', hour, ':', minute, ':', second].join('');
}