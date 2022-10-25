package com.BYX.pojo;

/**
 * Author   Bai YanXu
 * Date    2022-10-24 - 22:59
 */
public class BrandBeanByCondition {
    private Integer status;
    private String brands;
    private String name;
    private Integer priceMin;
    private Integer priceMax;
    private Integer inventoryMin;
    private Integer inventoryMax;
    private String setupTime;
    private String deadTime;

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
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

    public Integer getPriceMin() {
        return priceMin;
    }

    public void setPriceMin(Integer priceMin) {
        this.priceMin = priceMin;
    }

    public Integer getPriceMax() {
        return priceMax;
    }

    public void setPriceMax(Integer priceMax) {
        this.priceMax = priceMax;
    }

    public Integer getInventoryMin() {
        return inventoryMin;
    }

    public void setInventoryMin(Integer inventoryMin) {
        this.inventoryMin = inventoryMin;
    }

    public Integer getInventoryMax() {
        return inventoryMax;
    }

    public void setInventoryMax(Integer inventoryMax) {
        this.inventoryMax = inventoryMax;
    }

    public String getSetupTime() {
        return setupTime;
    }

    public void setSetupTime(String setupTime) {
        this.setupTime = setupTime;
    }

    public String getDeadTime() {
        return deadTime;
    }

    public void setDeadTime(String deadTime) {
        this.deadTime = deadTime;
    }

    @Override
    public String toString() {
        return "BrandBeanByCondition{" +
                "status=" + status +
                ", brands='" + brands + '\'' +
                ", name='" + name + '\'' +
                ", priceMin=" + priceMin +
                ", priceMax=" + priceMax +
                ", inventoryMin=" + inventoryMin +
                ", inventoryMax=" + inventoryMax +
                ", setupTime='" + setupTime + '\'' +
                ", deadTime='" + deadTime + '\'' +
                '}';
    }


}
