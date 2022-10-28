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

new Vue({
    el: "#app",
    mounted(){
//当页面加载完成之后执行的函数
        this.selectAll();
    },
    data() {
        return {
//分页工具每页显示条数
            pageSize:5,
//数据库总数据条数
            totalCount:100,
//批量删除方法里面被选中的ID数组
            selectedIds:[],
//修改商品属性的抽屉
            table: false,
            dialog: false,
            loading: false,
            formLabelWidth: '80px',
            timer: null,
//分页工具条:当前页码
            currentPage: 1,
//修改商品数据回显
            brandUpdate: {
                id: '',
                brands: '',
                name: '',
                price: '',
                ranking: '',
                inventory: '',
                status: '',
                description: '',
                createTime: '',
                updateTime: '',
                images: ''
            },
//添加商品
            brandNEW: {
                id: '',
                brands: '',
                name: '',
                price: '',
                ranking: '',
                inventory: '',
                status: '1',
                description: '',
                createTime: '',
                updateTime: '',
                images: ''
            },
//新增商品验证规则
            rules: {
                brands: [
                    {required: true, message: '请输入品牌名称', trigger: 'blur'},
                    {min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur'}
                ],
                name: [
                    {required: true, message: '请输入品牌型号', trigger: 'blur'},
                    {min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur'}
                ],
                price: [
                    {required: true, message: '请输入商品价格', trigger: 'blur'},
                    {pattern: /^\+?[1-9][0-9]*$/, message: '商品价格必须大于0且为整数', trigger: 'blur'}
                ],
                inventory: [
                    {required: true, message: '请输入商品库存', trigger: 'blur'},
                    {pattern: /^\+?[1-9][0-9]*$/, message: '商品库存必须大于0且为整数', trigger: 'blur'}
                ],
                ranking: [
                    {required: true, message: '请输入商品排名', trigger: 'blur'},
                    {pattern: /^\+?[1-9][0-9]*$/, message: '商品排名必须大于0且为整数', trigger: 'blur'}
                ],
                description: [
                    {required: true, message: '请填写商品描述', trigger: 'blur'}
                ]
            },
            rule2: {
                inventoryM: [
                    {pattern: /^\+?[1-9][0-9]*$/, message: '商品库存必须大于0且为整数', trigger: 'blur'}
                ],
                priceM: [
                    {pattern: /^\+?[1-9][0-9]*$/, message: '商品价格必须大于0且为整数', trigger: 'blur'}
                ],
            },
//查询搜索框
            brand: {
                brands: '',
                name: '',
                priceMin: '',
                priceMax: '',
                ranking: '',
                inventoryMin: '',
                inventoryMax: '',
                status: '',
                setupTime: '',
                deadTime: '',
            },

//添加数据对话框初始是否展示
            centerDialogVisible: false,
//日期选择器
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                        picker.$emit('pick', new Date());
                    }
                }, {
                    text: '昨天',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                    }
                }, {
                    text: '一周前',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                    }
                }]
            },
//复选框
            multipleSelection: [],

            tableData: [{
                brands: '联想',
                name: '拯救者Y7000',
                price: '5999',
                ranking: '122',
                inventory: '5963',
                status: '1',
                description: 'i5-12500H/RTX3050/16G/512G/60Hz',
                createTime: '2022-10-22 12:23:01',
                updateTime: '2022-10-23 08:23:56'
            }, {
                brands: '联想',
                name: '拯救者Y7000',
                price: '5999',
                ranking: '122',
                inventory: '5963',
                status: '1',
                description: 'i5-12500H/RTX3050/16G/512G/60Hz',
                createTime: '2022-10-22 12:23:01',
                updateTime: '2022-10-23 08:23:56'
            }]
        }
    },


/*所有方法*/
    methods: {
//显示每页开始的索引
        indexMethod(index) {
            this.currentPage<=0?this.currentPage=1:this.currentPage;
            if (this.currentPage!=1){
                return index+1+((this.currentPage-1)*this.pageSize);
            }
            return index+1;
        },
//每次点击新增按钮前清空模型数据
        clearAdd(brandNEW){
            this.$refs[brandNEW].resetFields();
        },
//批量删除方法
        deleteByIds(){
            console.log(this.multipleSelection);
            if (this.multipleSelection.length==0){
                return;
            }
            this.$confirm('此操作将删除该数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                for (let i = 0; i < this.multipleSelection.length; i++) {
                    let selectionElement = this.multipleSelection[i];
                    this.selectedIds[i]=selectionElement.id;
                }
                var _this=this;
                axios({
                    method:'post',
                    url:'http://localhost:8080/computer/brand/deleteByIds',
                    data:_this.selectedIds
                }).then(function (resp) {
                    if (resp.data=='deleteIdsSucceed'){
                        _this.selectAll();
                        _this.$message({
                            message:'删除成功',
                            type:'success'
                        });
                    }
                })
            }).catch(() => {
                this.selectedIds=null;
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });

        },
//修改商品属性的抽屉的开与关
        handleClose(done) {
            if (this.loading) {
                return;
            }
            this.$confirm('确定要提交表单吗？')
                .then(_ => {
                    this.loading = true;
                    this.timer = setTimeout(() => {
                        done();
                        // 动画关闭需要一定的时间
                        setTimeout(() => {
                            this.loading = false;
                        }, 400);
                    }, 2000);
                })
                .catch(_ => {});
        },
        cancelForm() {
            this.loading = false;
            this.dialog = false;
            clearTimeout(this.timer);
        },
//点击修改。触发这个函数，用于数据回显
        updateBrands(index,row){
            this.brandUpdate.id=row.id;
            this.brandUpdate.brands=row.brands;
            this.brandUpdate.name=row.name;
            this.brandUpdate.price=row.price;
            this.brandUpdate.ranking=row.ranking;
            this.brandUpdate.inventory=row.inventory;
            this.brandUpdate.status=row.status;
            this.brandUpdate.description=row.description;
            this.brandUpdate.createTime=row.createTime;
            this.brandUpdate.updateTime=getFormatDateTime();
            this.brandUpdate.images=row.images;
        },
//删除单个商品
        deleteById(index,row) {
            // console.log("index："+index+",row:"+row.id);
            this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                var _this=this;
                //执行删除逻辑
                axios({
                    method:'post',
                    url:'http://localhost:8080/computer/brand/deleteById',
                    data:row.id
                }).then(function (resp) {
                    if (resp.data=="deleteSucceed"){
                        _this.selectAll();
                        _this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    }
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },

//查询分页数据方法
        selectAll(){
            var _this=this;
            axios({
                method:"post",
                url:'http://localhost:8080/computer/brand/selectByPageAndCondition?currentPage='+this.currentPage+'&pageSize='+this.pageSize,
                data:this.brand,
            }).then(function (resp) {
                _this.tableData = resp.data.rows;
    //设置总记录数
                _this.totalCount=resp.data.totalCount;
            })
        },
//修改商品提交
        updateBrandSubmit(brandUpdate){
            this.$refs[brandUpdate].validate((valid) => {
                if (valid) {
                    let dateTime = getFormatDateTime();
                    this.brandUpdate.updateTime = dateTime;
                    var _this=this;
                    //添加数据
                    axios({
                        method: "post",
                        url:'http://localhost:8080/computer/brand/updateBrand',
                        data:_this.brandUpdate
                    }).then(function (resp) {
                        if (resp.data=='updateSucceed'){
                            //关闭窗口
                            _this.cancelForm();
                            _this.selectAll();
                            //注册成功消息
                            _this.$message({
                                message: '商品修改成功',
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
//添加商品提交
        submitForm(brandNEW) {
            this.$refs[brandNEW].validate((valid) => {
                if (valid) {
                    let dateTime = getFormatDateTime();
                    this.brandNEW.createTime = dateTime;
                    this.brandNEW.updateTime = dateTime;
                    this.brandNEW.images = getBrandImage(this.brandNEW.brands.trim());
                    //console.log(this.brandNEW);
                    var _this=this;
                    //添加数据
                    axios({
                        method: "post",
                        url:'http://localhost:8080/computer/brand/add',
                        data:_this.brandNEW
                    }).then(function (resp) {
                        if (resp.data=='addSucceed'){
                            //关闭窗口
                            _this.centerDialogVisible = false;
                            _this.selectAll();
                            //注册成功消息
                            _this.$message({
                                message: '商品添加成功',
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
//搜索区域表单
        onSubmit() {
            if (this.brand.priceMin!=='' && this.brand.priceMin!=null && this.brand.priceMax!=='' && this.brand.priceMax!=null){
                if (this.brand.priceMin>this.brand.priceMax){
                    var temp=this.brand.priceMin;
                    this.brand.priceMin=this.brand.priceMax;
                    this.brand.priceMax=temp;
                }
            }if (this.brand.setupTime != '' && this.brand.setupTime != null && this.brand.deadTime != '' && this.brand.deadTime != null){
                var setup=parseDATEMill(dataFormat(this.brand.setupTime));
                var dead =parseDATEMill(dataFormat(this.brand.deadTime));
                if (setup>dead){
                    var temp=this.brand.setupTime;
                    this.brand.setupTime = dataFormat(this.brand.deadTime);
                    this.brand.deadTime =dataFormat(temp);
                }
            }
            if (this.brand.setupTime != '' && this.brand.setupTime != null) {
                this.brand.setupTime = dataFormat(this.brand.setupTime);
            }
            if (this.brand.deadTime != '' && this.brand.deadTime != null) {
                this.brand.deadTime = dataFormat(this.brand.deadTime);
            }
            console.log(this.brand);
            this.selectAll();
        },
        tableRowClassName({row, rowIndex}) {
            if (rowIndex === 1) {
                return 'warning-row';
            } else if (rowIndex === 3) {
                return 'success-row';
            }
            return '';
        },
//批量删除复选框
        handleSelectionChange(val) {
            this.multipleSelection = val;
            //console.log(this.multipleSelection);
        },
//分页工具条
        handleSizeChange(val) {
            this.pageSize=val;
            this.selectAll();
        },
        handleCurrentChange(val) {
            //console.log(`当前页: ${val}`);
            this.currentPage=val;
            this.selectAll();
        }
    },
})

//商品图片
function getBrandImage(name) {
    if (name.indexOf("联想") != -1) {
        return "https://2f.zol-img.com.cn/product/221/161/ceZI0r10naba2.jpg";
    } else if (name.indexOf("惠普") != -1) {
        return "https://2e.zol-img.com.cn/product/219/6/ceUUR0agBY3o.jpg";
    } else if (name.indexOf("戴尔") != -1) {
        return "https://2b.zol-img.com.cn/product/219/929/ce8KQHUsbcBbA.jpg";
    } else if (name.indexOf("华为") != -1) {
        return "https://2d.zol-img.com.cn/product/222/547/ceyfpAmfKIcsQ.jpg";
    } else if (name.indexOf("华硕") != -1) {
        return "https://2e.zol-img.com.cn/product/222/290/ce91YatBwhN9s.jpg";
    } else if (name.indexOf("宏碁") != -1) {
        return "https://2a.zol-img.com.cn/product/221/786/ceN3IiUCmr6yM.jpg";
    } else if (name.indexOf("苹果") != -1 || name.indexOf("ac") != -1) {
        return "https://2a.zol-img.com.cn/product/221/32/cevfb4QaLSpQc.jpg";
    } else if (name.indexOf("外星人") != -1) {
        return "https://2f.zol-img.com.cn/product/222/353/ceVkRHAHsGqLo.jpg";
    } else if (name.indexOf("神舟") != -1) {
        return "https://2e.zol-img.com.cn/product/221/466/cemak8oa2fOmg.jpg";
    } else if (name.indexOf("机械革命") != -1) {
        return "https://2d.zol-img.com.cn/product/221/379/ceU9EsKxUqW1Y.jpg";
    } else if (name.indexOf("雷神") != -1) {
        return "https://2a.zol-img.com.cn/product/220/612/ceyOTi46kYVhE.jpg";
    } else if (name.indexOf("机械师") != -1) {
        return "https://2c.zol-img.com.cn/product/219/350/ceXTVW4J1yL.jpg";
    } else if (name.indexOf("荣耀") != -1) {
        return "https://2b.zol-img.com.cn/product/221/263/ce9lXiuLafLw.jpg";
    } else if (name.indexOf("ROG") != -1 || name.indexOf("玩家国度") != -1) {
        return "https://2b.zol-img.com.cn/product/220/77/cepBV0gWPtLiI.jpg";
    } else if (name.indexOf("微星") != -1) {
        return "https://2e.zol-img.com.cn/product/210/772/cejnZEwXnPSsk.jpg";
    } else if (name.indexOf("红米") != -1 || name.indexOf("ed") != -1) {
        return "https://2e.zol-img.com.cn/product/222/302/ce8nkbuYFqGw.jpg";
    } else {
        return "https://2a.zol-img.com.cn/product/213/516/ceMw2AS6eBBbc.jpg";
    }
}

//格式化时间
function dataFormat(originVal) {
    const newDate = new Date(originVal);
    const Year = newDate.getFullYear();
    const Month = (newDate.getMonth() + 1 + "").padStart(2, "0"); //padStart() 字符串不够长 从头部补齐指定的字符串 padEnd() 尾部补齐
    const Day = (newDate.getDate() + "").padStart(2, "0");
    const Hours = (newDate.getHours() + "").padStart(2, "0");
    const Minutes = (newDate.getMinutes() + "").padStart(2, "0");
    const Seconds = (newDate.getSeconds() + "").padStart(2, "0");

    return `${Year}-${Month}-${Day} ${Hours}:${Minutes}:${Seconds}`;
}
//将日期转换为时间戳
function parseDATEMill(date){
    var d=new Date(date);
    var time1=d.getTime();
    return time1;
}