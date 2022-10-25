package com.BYX.pojo;

/**
 * Author   Bai YanXu
 * Date    2022-10-22 - 20:59
 */
public class brand {
    private Integer id;
    private String brands;
    private String name;
    private Integer price;
    private Integer ranking;
    private Integer inventory;//库存
    private Integer status;
    private String description;
    private String createTime;
    private String updateTime;
    private String images;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBrands() {
        return brands;
    }

    public void setBrands(String brands) {
        this.brands = brands;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public Integer getRanking() {
        return ranking;
    }

    public void setRanking(Integer ranking) {
        this.ranking = ranking;
    }

    public Integer getInventory() {
        return inventory;
    }

    public void setInventory(Integer inventory) {
        this.inventory = inventory;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCreateTime() {
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    public String getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(String updateTime) {
        this.updateTime = updateTime;
    }

    public String getImages() {
        return images;
    }

    public void setImages(String images) {
        this.images = images;
    }

    public String getStatusStr() {
        if (status==null){
            return "未知";
        }
        return status==0?"已售罄":"售卖中";
    }

    @Override
    public String toString() {
        return "brand{" +
                "id=" + id +
                ", brands='" + brands + '\'' +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", ranking=" + ranking +
                ", inventory=" + inventory +
                ", status=" + status +
                ", description='" + description + '\'' +
                ", createTime='" + createTime + '\'' +
                ", updateTime='" + updateTime + '\'' +
                ", images='" + images + '\'' +
                '}';
    }
}
