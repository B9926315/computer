package com.BYX.mapper;

import com.BYX.pojo.BrandBeanByCondition;
import com.BYX.pojo.brand;
import org.apache.ibatis.annotations.*;

import java.util.List;

/**
 * Author   Bai YanXu
 * Date    2022-10-22 - 21:07
 */
public interface BrandMapper {
    //查询所有商品
    @Select("select * from computerbrands order by ranking desc,price desc ")
    List<brand> selectAll();
    //新增品牌
    @Insert("insert into computerbrands values (null,#{brands},#{name},#{price},#{ranking},#{inventory},#{status},#{description},#{createTime},#{updateTime},#{images})")
    void add(brand brand);
    //删除商品
    @Delete("delete from computerbrands where id=#{id}")
    void deleteById(int id);
    //修改商品属性
    @Update("update computerbrands set brands=#{brands},name=#{name},price=#{price},ranking=#{ranking},inventory=#{inventory},status=#{status},description=#{description},updateTime=#{updateTime} where id=#{id}")
    void updateBrand(brand brand);
    //批量删除商品
    void deleteByIds(@Param("ids") int[] ids);
    //分页查询
    @Select("select * from computerbrands order by ranking desc,price desc limit #{begin},#{size}")
    List<brand> selectByPage(@Param("begin") int begin,@Param("size")int size);
    //查询总记录数
    @Select("select count(*) from computerbrands")
    int selectTotalCount();
    //分页条件查询
    List<brand> selectByPageAndCondition(@Param("begin") int begin,@Param("size")int size,@Param("brandBeanByCondition") BrandBeanByCondition brandBeanByCondition);
    //查询总记录数
    int selectTotalCountByCondition(BrandBeanByCondition brandBeanByCondition);
}
