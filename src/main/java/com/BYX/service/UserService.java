package com.BYX.service;

import com.BYX.pojo.user;

/**
 * Author   Bai YanXu
 * Date    2022-10-21 - 17:13
 */
public interface UserService {
    //用户登录验证
    user login(String username,String password,String kind);
    //用户注册
    void register(user USER);
    //用户注册时候根据用户名查询是否重复
    user selectByUsername(String username);
}
