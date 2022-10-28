new Vue({
    el:'#app',
    mounted(){
this.selectAllOrder();
    },
    data(){
        return{
            //商品订单数据模型
            orderGoods:{
                goodsName:'',//商品名称
                orderNumber:'',//订单号码
                number:'',//购买数量
                status:'',//物流状态
                payTime:'',//支付时间
                name:'',//收货人姓名
                phone:'',//收货人电话
                address:''//收货地址
            },
            //用户名
            username:'a1',
            //表格数据
            tableData: [{
                goodsName: '联想Y7000',
                orderNumber:'2022102423',
                number:'2',
                status:'1',
                payTime:'2022-10-24 12:23:01',
                name: '墨子',
                phone:'15232569874',
                address: '甘肃省酒泉市敦煌市'
            }, {
                goodsName: '华硕天选3Plus',
                orderNumber:'2022102456',
                number:'2',
                status:'2',
                payTime:'2022-10-24 12:23:01',
                name: '李渊',
                phone:'15232569896',
                address: '甘肃省兰州市城关区'
            }, {
                goodsName: '微星武士62',
                orderNumber:'2022102496',
                number:'2',
                status:'3',
                payTime:'2022-10-24 12:23:01',
                name: '刘备',
                phone:'15232569874',
                address: '广东省广州市白云区'
            }],
        };
    },
    methods:{
        //查询该用户所有订单
        selectAllOrder(){
            let search = location.search;
            let split = search.split("=");
            axios({
                method:'get',
                url:'http://localhost:8080/computer/brand/customerSelectAllOrder?username='+split[1],
            }).then(resp=>{
                this.tableData=resp.data;
            })
        },
        dataRefreh() {
            // 计时器正在进行中，退出函数
            if (this.intervalId != null) {
                return;
            }
            // 计时器为空，操作
            this.intervalId = setInterval(() => {
                this.selectAllOrder(); //加载数据函数
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