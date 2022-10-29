package com.BYX.pojo;

/**
 * Author   Bai YanXu
 * Date    2022-10-28 - 12:39
 */
//订单实体类
public class GoodsOrder {
    private Integer id;
    private String goodsName;//商品名称
    private Integer goodsId;//商品ID
    private String payTime;//付款时间
    private String orderNumber;//订单号
    private Integer number;//购买数量
    private String username;//订单用户名
    private Integer status;//发货状态
    private String name;//收货人姓名
    private String phone;
    private String address;
    private Long income;//本单收入

    public Long getIncome() {
        return income;
    }

    public void setIncome(Long income) {
        this.income = income;
    }

    @Override
    public String toString() {
        return "GoodsOrder{" +
                "id=" + id +
                ", goodsName='" + goodsName + '\'' +
                ", goodsId=" + goodsId +
                ", payTime='" + payTime + '\'' +
                ", orderNumber='" + orderNumber + '\'' +
                ", number=" + number +
                ", username='" + username + '\'' +
                ", status=" + status +
                ", name='" + name + '\'' +
                ", phone='" + phone + '\'' +
                ", address='" + address + '\'' +
                ", income=" + income +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getGoodsName() {
        return goodsName;
    }

    public void setGoodsName(String goodsName) {
        this.goodsName = goodsName;
    }

    public Integer getGoodsId() {
        return goodsId;
    }

    public void setGoodsId(Integer goodsId) {
        this.goodsId = goodsId;
    }

    public String getPayTime() {
        return payTime;
    }

    public void setPayTime(String payTime) {
        this.payTime = payTime;
    }

    public String getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
