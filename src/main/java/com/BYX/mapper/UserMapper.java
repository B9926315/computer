package com.BYX.mapper;

import com.BYX.pojo.user;
import org.apache.ibatis.annotations.*;

/**
 * Author   Bai YanXu
 * Date    2022-10-21 - 16:47
 */
public interface UserMapper {
    //用户登录
    @Select("select * from computeruser where username=#{username} and password=#{password} and kind=#{kind}")
    user login(@Param("username") String username, @Param("password") String password,@Param("kind") String kind);
    //用户注册
    @Insert("insert into computeruser values (null,#{username},#{password},#{phone},#{email},1)")
    void register(user USER);
    //用户注册时候根据用户名查询是否重复
    @Select("select * from computeruser where username=#{username}")
    user selectByUsername(String username);
}
