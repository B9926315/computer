package com.BYX.web.servlet;

import com.BYX.pojo.*;
import com.BYX.service.BrandService;
import com.BYX.service.Impl.BrandServiceImpl;
import com.alibaba.fastjson.JSON;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.util.List;

/**
 * Author   Bai YanXu
 * Date    2022-10-22 - 22:05
 */
@WebServlet("/brand/*")
public class BrandServlet extends BaseServlet{
    private BrandService brandService=new BrandServiceImpl();
    //查询所有
    public void selectAll(HttpServletRequest request, HttpServletResponse response) throws Exception {
        List<brand> brands = brandService.selectAll();
        String jsonString = JSON.toJSONString(brands);
        response.setContentType("text/json;charset=utf-8");
        response.getWriter().write(jsonString);
    }
    public void add(HttpServletRequest request, HttpServletResponse response) throws Exception{
        BufferedReader br = request.getReader();
        String params = br.readLine();
        brand brand = JSON.parseObject(params, brand.class);
        brandService.add(brand);
        response.getWriter().write("addSucceed");
    }
    public void deleteById(HttpServletRequest request, HttpServletResponse response) throws Exception{
        BufferedReader br = request.getReader();
        String params = br.readLine();
        brandService.deleteById(Integer.parseInt(params));
        response.getWriter().write("deleteSucceed");
    }
    //更新商品属性
    public void updateBrand(HttpServletRequest request, HttpServletResponse response) throws Exception{
        BufferedReader br = request.getReader();
        String params = br.readLine();
        brand brand = JSON.parseObject(params, brand.class);
        brandService.updateBrand(brand);
        response.getWriter().write("updateSucceed");
    }
    //批量删除商品
    public void deleteByIds(HttpServletRequest request, HttpServletResponse response) throws Exception{
        BufferedReader br = request.getReader();
        String params = br.readLine();
        int[] ids = JSON.parseObject(params, int[].class);
        brandService.deleteByIds(ids);
        response.getWriter().write("deleteIdsSucceed");
    }
    //分页查询
    public void selectByPage(HttpServletRequest request, HttpServletResponse response) throws Exception {
        //接收参数：当前页码、每页展示的条目数 url?currentPage=1&pageSize=5
        String _currentPage = request.getParameter("currentPage");
        String _pageSize = request.getParameter("pageSize");
        int currentPage = Integer.parseInt(_currentPage);
        int pageSize = Integer.parseInt(_pageSize);
        //调用service查询
        PageBean<brand> pageBean = brandService.selectByPage(currentPage, pageSize);

        String jsonString = JSON.toJSONString(pageBean);
        response.setContentType("text/json;charset=utf-8");
        response.getWriter().write(jsonString);
    }

    //分页条件查询
    public void selectByPageAndCondition(HttpServletRequest request, HttpServletResponse response) throws Exception {
        //接收参数：当前页码、每页展示的条目数 url?currentPage=1&pageSize=5
        String _currentPage = request.getParameter("currentPage");
        String _pageSize = request.getParameter("pageSize");
        int currentPage = Integer.parseInt(_currentPage);
        int pageSize = Integer.parseInt(_pageSize);
        //获取查询条件对象
        BufferedReader br = request.getReader();
        String params = br.readLine();
        System.out.println("前端传回来的："+params);
        BrandBeanByCondition brandBeanByCondition = JSON.parseObject(params, BrandBeanByCondition.class);
        System.out.println("条件查询对象："+brandBeanByCondition.toString());
        //调用service查询
        PageBean<brand> pageBean = brandService.selectByPageAndCondition(currentPage,pageSize,brandBeanByCondition);
        System.out.println("发送给前端的："+pageBean.toString());
        String jsonString = JSON.toJSONString(pageBean);
        response.setContentType("text/json;charset=utf-8");
        response.getWriter().write(jsonString);
    }
}
