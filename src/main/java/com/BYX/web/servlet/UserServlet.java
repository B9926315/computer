package com.BYX.web.servlet;

import com.BYX.pojo.user;
import com.BYX.service.Impl.UserServiceImpl;
import com.BYX.service.UserService;
import com.BYX.utils.CheckCodeUtil;
import com.BYX.utils.MD5Util;
import com.alibaba.fastjson.JSON;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.BufferedReader;
import java.io.IOException;

/**
 * Author   Bai YanXu
 * Date    2022-10-21 - 19:50
 */
@WebServlet("/user/*")
public class UserServlet extends BaseServlet{
    private UserService userService=new UserServiceImpl();
    public static String checkCode;
    //用户登录
    public void login(HttpServletRequest request, HttpServletResponse response) throws Exception {
        BufferedReader br = request.getReader();
        String params = br.readLine();
        user user = JSON.parseObject(params, user.class);
        //将密码转为MD5
        String md5 = MD5Util.getMD5(user.getPassword());
        //将得到的MD5存入user对象
        user.setPassword(md5);
        user loginUSER = userService.login(user.getUsername(), user.getPassword(),user.getKind()+"");
        if (loginUSER!=null){//登录成功
            if (loginUSER.getKind()==0){
                HttpSession session = request.getSession();
                session.setAttribute("username",user.getUsername());
                response.getWriter().write("0succeed");
            }else if (loginUSER.getKind()==1){
                HttpSession session = request.getSession();
                session.setAttribute("username",user.getUsername());
                response.getWriter().write("1succeed");
            }

        }else {
            response.getWriter().write("fail");
        }
    }
    //根据用户名查询，验证用户注册的是否重复
    public void selectByUsername(HttpServletRequest request, HttpServletResponse response) throws Exception{
        BufferedReader br = request.getReader();
        String params = br.readLine();
        user user = JSON.parseObject(params, user.class);
        user user1 = userService.selectByUsername(user.getUsername());
        if (user1!=null){
            //用户名已存在，不能注册
            response.getWriter().write("exist");
        }else {
            response.getWriter().write("can");
        }
    }
    //生成验证码
    public void checkCode(HttpServletRequest request, HttpServletResponse response) throws Exception{
        ServletOutputStream os = response.getOutputStream();
        checkCode= CheckCodeUtil.outputVerifyImage(90,38,os,4);
    }
    //检查验证码
    public void checkCodePass(HttpServletRequest request, HttpServletResponse response) throws Exception{
        BufferedReader rs = request.getReader();
        String param = rs.readLine();
        if (checkCode.equalsIgnoreCase(param)){
            response.getWriter().write("pass");
        }else {
            response.getWriter().write("error");
        }
    }
    //注册
    public void register(HttpServletRequest request, HttpServletResponse response) throws Exception{
        BufferedReader rs = request.getReader();
        String params = rs.readLine();
        user user = JSON.parseObject(params, user.class);
        user.setPassword(MD5Util.getMD5(user.getPassword()));
        user.setPhone(MD5Util.getMD5(user.getPhone()));
        user.setEmail(MD5Util.getMD5(user.getEmail()));
        userService.register(user);
        response.getWriter().write("succeed");
    }
}
