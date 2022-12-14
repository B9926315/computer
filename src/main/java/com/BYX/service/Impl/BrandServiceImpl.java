package com.BYX.service.Impl;

import com.BYX.mapper.BrandMapper;
import com.BYX.pojo.*;
import com.BYX.service.BrandService;
import com.BYX.utils.SqlSessionFactoryUtils;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import java.util.List;

/**
 * Author   Bai YanXu
 * Date    2022-10-22 - 22:02
 */
public class BrandServiceImpl implements BrandService {
    SqlSessionFactory factory= SqlSessionFactoryUtils.getSqlSessionFactory();
    @Override
    //查询所有商品
    public List<brand> selectAll() {
        SqlSession sqlSession = factory.openSession();
        BrandMapper mapper = sqlSession.getMapper(BrandMapper.class);
        List<brand> brands = mapper.selectAll();
        sqlSession.close();
        return brands;
    }

    @Override
    public void add(brand brand) {
        SqlSession sqlSession = factory.openSession();
        BrandMapper mapper = sqlSession.getMapper(BrandMapper.class);
        mapper.add(brand);
        sqlSession.commit();
        sqlSession.close();
    }

    @Override
    public void deleteById(int id) {
        SqlSession sqlSession = factory.openSession();
        BrandMapper mapper = sqlSession.getMapper(BrandMapper.class);
        mapper.deleteById(id);
        sqlSession.commit();
        sqlSession.close();
    }
//更新商品属性
    @Override
    public void updateBrand(brand brand) {
        SqlSession sqlSession = factory.openSession();
        BrandMapper mapper = sqlSession.getMapper(BrandMapper.class);
        mapper.updateBrand(brand);
        sqlSession.commit();
        sqlSession.close();
    }
//批量删除商品
    @Override
    public void deleteByIds(int[] ids) {
        SqlSession sqlSession = factory.openSession();
        BrandMapper mapper = sqlSession.getMapper(BrandMapper.class);
        mapper.deleteByIds(ids);
        sqlSession.commit();
        sqlSession.close();
    }

    @Override
    public PageBean<brand> selectByPage(int currentPage, int pageSize) {
        SqlSession sqlSession = factory.openSession();
        BrandMapper mapper = sqlSession.getMapper(BrandMapper.class);
        //计算开始的索引
        int begin=(currentPage-1)*pageSize;
        //计算查询条目数
        int size=pageSize;
        List<brand> rows = mapper.selectByPage(begin, size);
        //查询总记录数
        int totalCount = mapper.selectTotalCount();
        //新建对象，存入数据
        PageBean<brand> pageBean=new PageBean<>();
        pageBean.setRows(rows);
        pageBean.setTotalCount(totalCount);
        sqlSession.close();
        return pageBean;
    }
//分页条件查询
    @Override
    public PageBean<brand> selectByPageAndCondition(int currentPage, int pageSize, BrandBeanByCondition brandBeanByCondition) {
        SqlSession sqlSession = factory.openSession();
        BrandMapper mapper = sqlSession.getMapper(BrandMapper.class);
        //计算开始的索引
        int begin=(currentPage-1)*pageSize;
        //计算查询条目数
        int size=pageSize;
        String brands = brandBeanByCondition.getBrands();
        if (brands!=null && brands.length()>0){
            brandBeanByCondition.setBrands("%"+brands+"%");
        }
        String name = brandBeanByCondition.getName();
        if (name!=null && name.length()>0){
            brandBeanByCondition.setName("%"+name+"%");
        }

        List<brand> rows = mapper.selectByPageAndCondition(begin,size,brandBeanByCondition);
        //查询总记录数
        int totalCount = mapper.selectTotalCountByCondition(brandBeanByCondition);
        //新建对象，存入数据
        PageBean<brand> pageBean=new PageBean<>();
        pageBean.setRows(rows);
        pageBean.setTotalCount(totalCount);
        sqlSession.close();
        return pageBean;
    }

    @Override
    public List<brand> customerSelectAll(BrandBeanByCondition brandBeanByCondition) {
        SqlSession sqlSession = factory.openSession();
        BrandMapper mapper = sqlSession.getMapper(BrandMapper.class);
        String brands = brandBeanByCondition.getBrands();
        if (brands!=null && brands.length()>0){
            brandBeanByCondition.setBrands("%"+brands+"%");
        }
        String name = brandBeanByCondition.getName();
        if (name!=null && name.length()>0){
            brandBeanByCondition.setName("%"+name+"%");
        }
        List<brand> brandList = mapper.customerSelectAll(brandBeanByCondition);
        sqlSession.close();
        return brandList;
    }

    @Override
    public brand selectGoodsById(int id) {
        SqlSession sqlSession = factory.openSession();
        BrandMapper mapper = sqlSession.getMapper(BrandMapper.class);
        brand brandGoods = mapper.selectGoodsById(id);
        sqlSession.close();
        return brandGoods;
    }
//新增商品订单
    @Override
    public void addGoodsOrder(GoodsOrder goodsOrder) {
        SqlSession sqlSession = factory.openSession();
        BrandMapper mapper = sqlSession.getMapper(BrandMapper.class);
        Integer goodsId = goodsOrder.getGoodsId();//商品ID
        Integer number = goodsOrder.getNumber();//所购数量
        mapper.addGoodsOrder(goodsOrder);
        mapper.goodsNumberDecrease(number,goodsId);
        sqlSession.commit();
        sqlSession.close();
    }
//查询顾客所有订单
    @Override
    public List<GoodsOrder> customerSelectAllOrder(String username) {
        SqlSession sqlSession = factory.openSession();
        BrandMapper mapper = sqlSession.getMapper(BrandMapper.class);
        List<GoodsOrder> goodsOrders = mapper.customerSelectAllOrder(username);
        sqlSession.close();
        return goodsOrders;
    }
//更新订单状态
    @Override
    public void updateGoodsOrderStatus(int status, int id) {
        SqlSession sqlSession = factory.openSession();
        BrandMapper mapper = sqlSession.getMapper(BrandMapper.class);
        mapper.updateGoodsOrderStatus(status,id);
        sqlSession.commit();
        sqlSession.close();
    }

    @Override
    public List<GoodsOrder> selectAdminAllOrder() {
        SqlSession sqlSession = factory.openSession();
        BrandMapper mapper = sqlSession.getMapper(BrandMapper.class);
        List<GoodsOrder> goodsOrders = mapper.selectAdminAllOrder();
        sqlSession.close();
        return goodsOrders;
    }
}
