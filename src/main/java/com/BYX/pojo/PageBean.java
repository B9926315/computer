package com.BYX.pojo;

import java.util.List;

/**
 * Author   Bai YanXu
 * Date    2022-10-24 - 21:26
 */
public class PageBean<T> {
    private int totalCount;
    private List<T> rows;
    public int getTotalCount() {
        return totalCount;
    }
    public void setTotalCount(int totalCount) {
        this.totalCount = totalCount;
    }
    public List<T> getRows() {
        return rows;
    }
    public void setRows(List<T> rows) {
        this.rows = rows;
    }

    @Override
    public String toString() {
        return "PageBean{" +
                "totalCount=" + totalCount +
                ", rows=" + rows +
                '}';
    }
}
