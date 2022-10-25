package com.BYX.service.Impl;

import com.BYX.mapper.UserMapper;
import com.BYX.pojo.user;
import com.BYX.service.UserService;
import com.BYX.utils.SqlSessionFactoryUtils;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

/**
 * Author   Bai YanXu
 * Date    2022-10-21 - 17:18
 */
public class UserServiceImpl implements UserService {
    SqlSessionFactory factory=SqlSessionFactoryUtils.getSqlSessionFactory();
    //用户登录验证
    @Override
    public user login(String username, String password,String kind) {
        SqlSession sqlSession = factory.openSession();
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        user user = mapper.login(username, password,kind);
        sqlSession.close();
        return user;
    }
//用户注册
    @Override
    public void register(user USER) {
        SqlSession sqlSession = factory.openSession();
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        mapper.register(USER);
        sqlSession.commit();
        sqlSession.close();
    }
//用户注册时候，查看用户名是否重复
    @Override
    public user selectByUsername(String username) {
        SqlSession sqlSession = factory.openSession();
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        user USER = mapper.selectByUsername(username);
        sqlSession.close();
        return USER;
    }
}
