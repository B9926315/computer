new Vue({
    el:'#app',
    mounted(){
//当页面加载完成之后执行的函数
        this.selectAllOrder();
    },
    data(){
        return{
            tableData: [{
                goodsName: '联想Y7000',
                orderNumber:'2022102423',
                number:'2',
                status:'1',
                payTime:'2022-10-24 12:23:01',
                username:'byx',
                name: '墨子',
                phone:'15232569874',
                address: '甘肃省酒泉市敦煌市',
                income:'4563'
            }, {
                goodsName: '华硕天选3Plus',
                orderNumber:'2022102456',
                number:'2',
                status:'2',
                payTime:'2022-10-24 12:23:01',
                username:'mk',
                name: '李渊',
                phone:'15232569896',
                address: '甘肃省兰州市城关区',
                income:'9899'
            }, {
                goodsName: '微星武士62',
                orderNumber:'2022102496',
                number:'2',
                status:'3',
                payTime:'2022-10-24 12:23:01',
                username:'a1',
                name: '刘备',
                phone:'15232569874',
                address: '广东省广州市白云区',
                income:'8965'
            }],
        }
    },
    methods:{
        update(row){
            row.status=row.status+1;
            this.$confirm('是否继续操作?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                var _this=this;
                axios({
                    method:'post',
                    url:'http://localhost:8080/computer/brand/updateGoodsOrderStatus',
                    data:row
                }).then(function (resp) {
                    if (resp.data=='updateGoodsOrderStatusSuccess'){
                        _this.selectAllOrder();
                        _this.$message({
                            message:'操作成功',
                            type:'success'
                        });
                    }
                })
            }).catch(() => {
                this.selectAllOrder();
                this.$message({
                    type: 'info',
                    message: '已取消'
                });
            });
        },
        selectAllOrder() {
            axios({
                method:'post',
                url:'http://localhost:8080/computer/brand/selectAdminAllOrder'
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