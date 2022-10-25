package com.BYX.utils;

import java.security.MessageDigest;
/**
 * Author   Bai YanXu
 * Date    2022-10-21 - 21:27
 */
public class MD5Util {
    public static String getMD5(String Message) throws Exception {
        MessageDigest md5 = MessageDigest.getInstance("MD5");
        byte[] digest = md5.digest(Message.getBytes());
        StringBuilder bud=new StringBuilder();
        for (byte b : digest) {
            bud.append(String.format("%02x",b));
        }
        String information = bud.toString();
        return information;
    }
}
