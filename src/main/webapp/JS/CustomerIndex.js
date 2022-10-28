new Vue({
    el: "#app",
    mounted() {
//当页面加载完成之后执行的函数
        this.selectAll();
        this.getUsername();
    },
    /*数据加载*/
    data() {
        return {
            brand: {
                brands: '',
                name: '',
                priceMin: '',
                priceMax: '',
                inventoryMin: '',
                inventoryMax: '',
                status: '1',
            },
            username1:"",
            intervalId:null,
            tableData: [{
                brands: '联想',
                name: '拯救者Y7000',
                price: '5999',
                ranking: '122',
                inventory: '5963',
                status: '1',
                description: 'i5-12500H/RTX3050/16G/512G/60Hz',
                createTime: '2022-10-22 12:23:01',
                updateTime: '2022-10-23 08:23:56',
                images:""
            }]
        };
    },
//所有的方法
    methods: {
        customerOrder(){
            window.open("customerOrder.html?username="+this.username1);
        },
        //跳转到商品详情界面
        display(t){
            window.open('goodsDisplay.html?id='+t.id);
        },
        //搜索商品提交
        searchGoods(brand){
            this.selectAll();
        },
        getUsername(){
            this.username1=sessionStorage.getItem("username");
        },
        selectAll() {
            var _this = this;
            axios({
                method: "post",
                url: 'http://localhost:8080/computer/brand/customerSelectAll',
                data:this.brand
            }).then(function (resp) {
                _this.tableData = resp.data;
            })
        },

        dataRefreh() {
            // 计时器正在进行中，退出函数
            if (this.intervalId != null) {
                return;
            }
            // 计时器为空，操作
            this.intervalId = setInterval(() => {
                this.selectAll(); //加载数据函数
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