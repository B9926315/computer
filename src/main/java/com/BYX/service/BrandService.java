package com.BYX.service;
import com.BYX.pojo.*;

import java.util.List;

/**
 * Author   Bai YanXu
 * Date    2022-10-22 - 22:01
 */
public interface BrandService {
    //查询所有商品
    List<brand> selectAll();
    //新增品牌
    void add(brand brand);
    //删除商品
    void deleteById(int id);
    //更新商品属性
    void updateBrand(brand brand);
    //批量删除商品
    void deleteByIds(int[] ids);
    /**
     * 分页查询
     * @param currentPage 当前页码
     * @param pageSize 每页展示的条数
     * @return PageBean对象
     */
    PageBean<brand> selectByPage(int currentPage,int pageSize);
//分页条件查询
    PageBean<brand> selectByPageAndCondition(int currentPage, int pageSize, BrandBeanByCondition brandBeanByCondition);
}
