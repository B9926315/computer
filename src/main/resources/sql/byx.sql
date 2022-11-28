-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 120.53.11.73    Database: byx
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT = @@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS = @@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION = @@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE = @@TIME_ZONE */;
/*!40103 SET TIME_ZONE = '+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS = @@UNIQUE_CHECKS, UNIQUE_CHECKS = 0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS = 0 */;
/*!40101 SET @OLD_SQL_MODE = @@SQL_MODE, SQL_MODE = 'NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES = @@SQL_NOTES, SQL_NOTES = 0 */;

--
-- Table structure for table `computerbrands`
--
-- 电脑品牌表
DROP TABLE IF EXISTS `computerbrands`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `computerbrands`
(
    `id`          int                                    NOT NULL AUTO_INCREMENT COMMENT '商品ID',
    `brands`      varchar(40) COLLATE utf8mb4_general_ci NOT NULL COMMENT '品牌名称',
    `name`        varchar(60) COLLATE utf8mb4_general_ci  DEFAULT NULL COMMENT '电脑型号',
    `price`       int unsigned                            DEFAULT NULL COMMENT '电脑价格',
    `ranking`     int                                     DEFAULT '1' COMMENT '竞价排名',
    `inventory`   int unsigned                            DEFAULT NULL COMMENT '电脑库存',
    `status`      tinyint                                 DEFAULT '1' COMMENT '是否售卖',
    `description` text COLLATE utf8mb4_general_ci COMMENT '电脑描述',
    `createTime`  datetime                                DEFAULT NULL COMMENT '上架时间',
    `updateTime`  datetime                                DEFAULT NULL COMMENT '修改时间',
    `images`      varchar(200) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '电脑图片',
    PRIMARY KEY (`id`),
    UNIQUE KEY `computerBrands_id_uindex` (`id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 54
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `computerbrands`
--

LOCK TABLES `computerbrands` WRITE;
/*!40000 ALTER TABLE `computerbrands`
    DISABLE KEYS */;
INSERT INTO `computerbrands` (`id`, `brands`, `name`, `price`, `ranking`, `inventory`, `status`, `description`,
                              `createTime`, `updateTime`, `images`)
VALUES (1, '联想', '拯救者Y7000', 5999, 44, 82705, 1, 'i5-12500H/RTX3050/16G/512G/60Hz', '2022-10-04 20:10:14',
        '2022-10-04 20:10:14', 'https://2b.zol-img.com.cn/product/222/335/ceSP7D3QCQtI.jpg'),
       (2, '微星', '冲锋坦克-Pro-GP76', 11099, 11, 46467, 1, 'i7-10870H/16GB/1TB/RTX3060', '2022-10-04 20:10:14',
        '2022-10-04 20:10:14', 'https://2c.zol-img.com.cn/product/212/452/ce2qMxeRffwkY.jpg'),
       (3, '华为', 'MateBook 16s', 9199, 1, 327, 1, 'i9-12900H/16GB/1TB/集显', '2022-10-04 20:10:14', '2022-10-04 20:10:14',
        'https://2b.zol-img.com.cn/product/222/545/ceEwjq1N9OAk.jpg'),
       (4, '微星', '绝影-GS77', 32099, 2, 2656, 1, 'i9-12900H/64GB/2TB/RTX3080Ti', '2022-10-04 20:10:14',
        '2022-11-19 09:23:40', 'https://2e.zol-img.com.cn/product/222/350/ceGRLB4a6xqA.jpg'),
       (5, '惠普', '暗影精灵8', 8799, 3, 41256, 1, 'i7-12700H/16GB/512GB/RTX3060/144Hz', '2022-10-04 20:10:14',
        '2022-10-04 20:10:14', 'https://2b.zol-img.com.cn/product/222/847/ce01wghMj68gs.jpg'),
       (6, '宏碁', '掠夺者战斧300', 9969, 5, 9632, 1, 'i7-12700H/16GB/512GB/RTX3060', '2022-10-04 20:10:14',
        '2022-10-25 12:22:35', 'https://2b.zol-img.com.cn/product/221/693/ceR8CGFsvawQ.jpg'),
       (7, '华硕', '天选3-Plus', 10969, 5, 4523, 1, 'i7-12700H/16GB/512GB/RTX3070/360Hz', '2022-10-04 20:10:14',
        '2022-10-04 20:10:14', 'https://2a.zol-img.com.cn/product/222/568/cepCmIvVro4g.png'),
       (8, '华硕', '无畏Pro-16', 6999, 6, 2635, 1, 'i5 12500H/16GB/512GB/RTX3050', '2022-10-04 20:10:14',
        '2022-11-19 09:23:14', 'https://2d.zol-img.com.cn/product/222/895/ceaOy4bvpPXxQ.jpg'),
       (9, '联想', '小新-Pro-16', 5399, 7, 395847, 1, 'R7-6800H/16GB/512GB/集显', '2022-10-04 20:10:14',
        '2022-11-19 09:23:10', 'https://2a.zol-img.com.cn/product/221/362/ceDbYrPvlQxPw.jpg'),
       (10, '联想', '拯救者R9000P', 8688, 8, 85231, 1, 'R7-5800H/16GB/512GB/RTX3060', '2022-10-04 20:10:14',
        '2022-10-04 20:10:14', 'https://2f.zol-img.com.cn/product/220/825/ceoz9cL16dpYI.png'),
       (11, '微星', '武士GF66', 7299, 9, 9635, 1, 'i7-11800H/16GB/512GB/RTX3060', '2022-10-04 20:10:14',
        '2022-10-04 20:10:14', 'https://2d.zol-img.com.cn/product/222/403/ce053THmsyIqE.jpg'),
       (12, '机械革命', '蛟龙5', 7999, 10, 774125, 1, 'R7-4800H/16GB/512GB/RTX3060/165Hz', '2022-10-04 20:10:14',
        '2022-11-19 09:23:06', 'https://2a.zol-img.com.cn/product/222/286/cekBry8zAFyM.jpg'),
       (13, '雷蛇', 'Razer-BOOK-13', 10999, 23, 56325, 1, 'i5 1135G7/8GB/256GB/集显', '2022-10-25 19:40:36',
        '2022-10-25 19:40:39', 'https://2d.zol-img.com.cn/product/209/963/cenWi4BvafBaw.jpg'),
       (14, '雷蛇', 'Razer-灵刃14', 19999, 32, 255869, 1, 'R9 6900HX/16GB/1TB/RTX3070Ti/165Hz', '2022-10-25 19:43:07',
        '2022-10-25 19:43:05', 'https://2a.zol-img.com.cn/product/221/450/cerxhCz8pvhIY.jpg'),
       (15, '惠普', '星14-Pro', 4699, 33, 25369, 1, 'i5 12500H/16GB/512GB/集显/LCD', '2022-10-25 19:53:27',
        '2022-10-25 19:53:29', 'https://2b.zol-img.com.cn/product/220/445/cegfWCz6Q2xE6.jpg'),
       (16, '惠普', '战X-16', 6249, 36, 155969, 1, 'R7 6850HS/16GB/512GB/集显', '2022-10-25 19:55:15', '2022-11-19 09:22:58',
        'https://2e.zol-img.com.cn/product/220/656/ce1BYQEl3WczQ.jpg'),
       (17, '惠普', '战66五代', 4324, 91, 25366, 1, 'i5 1240P/16GB/512GB/集显', '2022-10-24 21:01:28', '2022-11-19 09:21:56',
        'https://2a.zol-img.com.cn/product/221/190/ceiySvChU7JLA.jpg'),
       (18, '惠普', '战66-Pro-A', 5002, 101, 1000, 1, 'R5 5600U/8GB/256GB/集显', '2022-10-24 21:02:42',
        '2022-11-26 22:12:28', 'https://2a.zol-img.com.cn/product/220/134/ceqchJNwUBOs.png'),
       (19, '联想', '小新-Pro-16', 5399, 37, 583643, 1, 'i5 12500H/16GB/512GB/集显', '2022-10-25 20:09:59',
        '2022-10-25 20:10:01', 'https://2b.zol-img.com.cn/product/221/931/ceJ9F1yaPc2.jpg'),
       (20, '联想', '小新-Pro-14', 6499, 40, 122348, 1, 'i9 12900H/16GB/512GB/集显', '2022-10-25 20:35:33',
        '2022-11-19 09:22:42', 'https://2c.zol-img.com.cn/product/221/94/cewFU7SelE6I.jpg'),
       (21, '联想', 'YOGA 13s', 5399, 1, 222220, 1, 'R5 5600U/16GB/512GB/集显', '2022-10-25 20:37:18',
        '2022-10-25 20:37:23', 'https://2b.zol-img.com.cn/product/221/889/ce6ik0H7oMy5s.jpg'),
       (22, '戴尔', '灵越15', 4999, 42, 235686, 1, 'Ins 15-3511-R1605S', '2022-10-25 20:40:29', '2022-10-25 20:40:32',
        'https://2e.zol-img.com.cn/product/220/728/ceB9kmUqjAzp.png'),
       (29, '神舟', '战神TX8-CA5DP', 8688, 45, 6309, 1, 'i7-12700H/16GB/512GB/RTX3060', '2022-10-12 12:45:02',
        '2022-11-19 09:22:33', 'https://2a.zol-img.com.cn/product/222/700/cevyyVJqrOCyA.jpg'),
       (31, '机械革命', '蛟龙16', 7999, 68, 97324, 1, 'i5 12500H/16GB/512GB/RTX3050', '2022-10-12 12:45:02',
        '2022-11-19 09:22:04', 'https://2c.zol-img.com.cn/product/220/572/cefXsaa1wxHbo.jpg'),
       (32, '外星人', 'M15 R6', 10999, 63, 79346, 0, 'R7-6800H/16GB/512GB/集显', '2022-10-12 12:45:02',
        '2022-11-23 17:44:13', 'https://2a.zol-img.com.cn/product/222/360/cetwzeZPrIPE.jpg'),
       (33, '戴尔', 'Latitude 5330', 19999, 22, 5645, 1, 'R7-5800H/16GB/512GB/RTX3060', '2022-10-12 12:45:02',
        '2022-10-13 12:56:31', 'https://2c.zol-img.com.cn/product/220/332/cegemMUDfkc.jpg'),
       (34, '小米', 'Pro 14', 4699, 64, 8411, 1, 'i7-11800H/16GB/512GB/RTX3060', '2022-10-12 12:45:02',
        '2022-11-19 09:22:10', 'https://2d.zol-img.com.cn/product/221/903/ceev73mVXU7CQ.jpg'),
       (35, '华为', 'MateBook D 14', 6249, 61, 990430, 1, 'R7-4800H/16GB/512GB/RTX3060/165Hz', '2022-10-12 12:45:02',
        '2022-11-19 09:22:25', 'https://2e.zol-img.com.cn/product/222/554/ceJxgyeGeBOt.jpg'),
       (36, '联想', 'ThinkBook Plus', 4324, 5, 613678, 1, 'i5 1135G7/8GB/256GB/集显', '2022-10-12 12:45:02',
        '2022-11-19 09:23:34', 'https://2a.zol-img.com.cn/product/221/22/ce4pCUrU62sDw.jpg'),
       (38, '外星人', 'X14 R1', 5399, 49, 188575, 1, 'i5 12500H/16GB/512GB/集显/LCD', '2022-10-12 12:45:02',
        '2022-11-19 09:22:29', 'https://2e.zol-img.com.cn/product/221/880/cekBbWztAFj9w.jpg'),
       (39, '玩家国度', '幻16', 5399, 17, 167516, 1, 'i5-12500H/RTX3050/16G/512G/60Hz', '2022-10-12 12:45:02',
        '2022-10-25 23:05:47', 'https://2a.zol-img.com.cn/product/220/112/ceVFXZM497GAg.jpg'),
       (40, '雷蛇', '灵刃15', 8688, 11, 518, 1, 'i7-10870H/16GB/1TB/RTX3060', '2022-10-12 12:45:02', '2022-10-13 12:56:31',
        'https://2a.zol-img.com.cn/product/199/260/ceZB200jthyRc.jpg'),
       (41, '荣耀', 'MagicBook 16', 7299, 30, 571862, 1, 'i9-12900H/16GB/1TB/集显', '2022-10-12 12:45:02',
        '2022-11-19 09:23:02', 'https://2b.zol-img.com.cn/product/221/263/ce9lXiuLafLw.jpg'),
       (42, '雷神', 'T-Book 14', 7999, 43, 4003, 1, 'i9-12900H/64GB/2TB/RTX3080Ti', '2022-10-12 12:45:02',
        '2022-11-19 09:22:38', 'https://2b.zol-img.com.cn/product/221/19/cefqERxInzNA.jpg'),
       (44, '雷蛇', '灵刃17专业版', 32099, 42, 3230, 1, 'i7-12700H/16GB/512GB/RTX3060', '2022-10-12 12:45:02',
        '2022-11-19 09:22:46', 'https://2a.zol-img.com.cn/product/198/632/ceXFvZzRMhMNE.jpg'),
       (45, '华硕', '无畏Pro 16', 8799, 7, 82280, 1, 'i7-12700H/16GB/512GB/RTX3070/360Hz', '2022-10-12 12:45:02',
        '2022-10-13 12:56:31', 'https://2a.zol-img.com.cn/product/222/892/ce2dNggra7yzk.jpg'),
       (46, '机械师', '星辰15', 9969, 88, 7712, 1, 'i5 12500H/16GB/512GB/RTX3050', '2022-10-12 12:45:02',
        '2022-10-13 12:56:31', 'https://2f.zol-img.com.cn/product/220/775/cep7DrHmVpzTs.png');
/*!40000 ALTER TABLE `computerbrands`
    ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `computerorder`
--

DROP TABLE IF EXISTS `computerorder`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `computerorder`
(
    `id`          int NOT NULL AUTO_INCREMENT COMMENT 'id',
    `goodsName`   varchar(40) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '商品名称',
    `goodsId`     int                                    DEFAULT NULL COMMENT '商品ID',
    `payTime`     datetime                               DEFAULT NULL COMMENT '付款时间',
    `income`      mediumtext COLLATE utf8mb4_general_ci COMMENT '本单收入',
    `orderNumber` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '订单号',
    `number`      int                                    DEFAULT NULL COMMENT '所购数量',
    `username`    varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '用户名',
    `status`      tinyint                                DEFAULT '1' COMMENT '是否发货？1未发货，2已发货',
    `name`        varchar(40) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '收货人姓名',
    `phone`       varchar(13) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '收货人电话',
    `address`     varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '收货地址',
    PRIMARY KEY (`id`),
    UNIQUE KEY `computerOrder_id_uindex` (`id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 17
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `computerorder`
--

LOCK TABLES `computerorder` WRITE;
/*!40000 ALTER TABLE `computerorder`
    DISABLE KEYS */;
INSERT INTO `computerorder` (`id`, `goodsName`, `goodsId`, `payTime`, `income`, `orderNumber`, `number`, `username`,
                             `status`, `name`, `phone`, `address`)
VALUES (1, '机械师星辰15', 46, '2022-10-28 13:12:12', '9899', '1666933932492', 2, 'mk', 4, '白彦旭', '15123523698', '西安'),
       (2, '惠普战66-Pro-A', 18, '2022-10-28 13:44:07', '9699', '1666935847544', 2, 'a1', 2, 'b', '15123652365', 'dyh'),
       (3, '惠普战66-Pro-A', 18, '2022-10-28 14:36:13', '9632', '1666938973161', 2, 'a1', 3, '男', '15123532566', '帮准'),
       (5, '惠普战66-Pro-A', 18, '2022-10-28 15:12:16', '23656', '1666941136321', 2, 'a1', 4, '白彦旭', '15123653256', '你胡'),
       (6, '玩家国度幻16', 39, '2022-10-28 22:18:13', '5948', '1666966693498', 1, 'a1', 2, '白彦旭', '15123652365', '中国'),
       (7, '戴尔灵越15', 22, '2022-10-29 20:55:23', '4999', '1667048123908', 1, 'a1', 2, '宋江', '15123552363', '美国'),
       (8, '联想YOGA 13s', 21, '2022-10-29 20:59:45', '10798', '1667048385459', 2, 'a1', 2, '卢俊义', '18625896324', '河北'),
       (9, '联想小新-Pro-16', 19, '2022-10-29 22:00:22', '10798', '1667052022956', 2, 'a2', 2, '林冲', '15196325896', '梁山泊'),
       (10, '惠普战66-Pro-A', 18, '2022-10-29 22:48:22', '8498', '1667054902433', 2, 'a2', 4, '陈成', '15123652365', '中国'),
       (11, '戴尔灵越15', 22, '2022-10-31 06:39:51', '9998', '1667169592012', 2, 'mk', 4, 'mi', '15232563256', 'uk'),
       (12, '微星冲锋坦克', 48, '2022-11-07 16:19:45', '26997', '1667809185920', 3, 'a1', 3, '白彦旭', '15123652365', '西安市'),
       (13, '联想拯救者R9000P', 10, '2022-11-07 16:45:18', '43440', '1667810718050', 5, 'a1', 4, '白彦旭', '15123652366', '基森'),
       (14, '联想小新-Pro-14', 20, '2022-11-19 15:29:58', '19497', '1668842998213', 3, 'a2', 4, '吉萨', '15132563256', '机房'),
       (15, '雷蛇灵刃17专业版', 44, '2022-11-23 17:50:15', '64198', '1669197015132', 2, 'asdf', 3, 'asdf', '12345678901',
        'asdf'),
       (16, '联想小新-Pro-14', 20, '2022-11-26 22:31:11', '32495', '1669473071434', 5, 'mk', 1, '豹子头', '15123568978',
        '陕西省西安市');
/*!40000 ALTER TABLE `computerorder`
    ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `computeruser`
--

DROP TABLE IF EXISTS `computeruser`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `computeruser`
(
    `id`       int                                    NOT NULL AUTO_INCREMENT COMMENT '主键',
    `username` varchar(40) COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户名',
    `password` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '密码',
    `phone`    varchar(40) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '手机号',
    `email`    varchar(40) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '邮箱',
    `kind`     tinyint                                DEFAULT '1' COMMENT '用户类型，1为店主，0为顾客',
    PRIMARY KEY (`id`),
    UNIQUE KEY `computerUser_id_uindex` (`id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 25
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `computeruser`
--

LOCK TABLES `computeruser` WRITE;
/*!40000 ALTER TABLE `computeruser`
    DISABLE KEYS */;
INSERT INTO `computeruser` (`id`, `username`, `password`, `phone`, `email`, `kind`)
VALUES (1, 'admin', 'b69259c99ce21a3569c58dc6d4f93891', 'ec4251a35dda6098cbf0e72ccd533c4c',
        '883275396d346e7a6bb936d565678c81', 0),
       (2, 'mk', 'e10adc3949ba59abbe56e057f20f883e', 'ec4251a35dda6098cbf0e72ccd533c4c',
        '883275396d346e7a6bb936d565678c81', 1),
       (6, 'min', 'e10adc3949ba59abbe56e057f20f883e', '09e2891a10d72f9127769a3548ecf717',
        '1c9a8db161a6e67b985b5bf10b9571b8', 1),
       (7, 'mkh', 'e10adc3949ba59abbe56e057f20f883e', '7ff5be5555a0ae77d61d5dec0729b5c6',
        '4cdc55ae74b564657160b6af16a59b75', 1),
       (8, 'dfg', 'e10adc3949ba59abbe56e057f20f883e', '7ff5be5555a0ae77d61d5dec0729b5c6',
        '4cdc55ae74b564657160b6af16a59b75', 1),
       (9, 'hu', 'e10adc3949ba59abbe56e057f20f883e', '7ff5be5555a0ae77d61d5dec0729b5c6',
        'beaecc7e271e3baecd4f64810511dd30', 1),
       (10, 'byx', 'e10adc3949ba59abbe56e057f20f883e', '7ff5be5555a0ae77d61d5dec0729b5c6',
        '450c3f1573ad710855b8b7990fcfdb8a', 1),
       (11, 'a1', 'e10adc3949ba59abbe56e057f20f883e', '553732dacb915c2012c0d1c1cac2580f',
        'f3c772568e626af0c37a2d90b9356997', 1),
       (12, 'a2', 'e10adc3949ba59abbe56e057f20f883e', '7ff5be5555a0ae77d61d5dec0729b5c6',
        '710b4da652a55cb2db224a887bbb28be', 1),
       (13, 'bai', 'e10adc3949ba59abbe56e057f20f883e', 'e303d525c4c16d1825b44d13b55ae772',
        '1e188a8e2d8931ced5c9a0d749877150', 1),
       (14, 'liuzzy', 'e10adc3949ba59abbe56e057f20f883e', '4be1a46959745a14f50f23d2a9da780c',
        '3ffc90ca91f207e8bf133c9115b1b343', 1),
       (15, 'abc', '6a9e3ad4332de5edd5812f0170ab81c7', 'befb414eb1341b69a71d679920c213b5',
        'ce42ae110b0ffb5ac3d34d73ab6103e6', 1),
       (16, 'MDND', 'bbe57668d435e3e088b320037ff50078', '10315d0df11d1baccaae318c123e2408',
        'f3968578160054f4b06b1de4b768d796', 1),
       (17, 'remu', '8e70a38e51328eeae9d5a42bc9c92ab5', 'e478b07b502f0ce2f20a2c8686581fc8',
        '2b48ef7080a1b52bbcada4d96a04e96d', 1),
       (18, 'Trump', 'e10adc3949ba59abbe56e057f20f883e', '4ca65fdd9a3c6b352d9dfa04832b37fc',
        '7c35679bccf58104fdc3949d0bec613d', 1),
       (19, 'wfdajsd', 'e10adc3949ba59abbe56e057f20f883e', '3d8b1a89d9bf5d49ea436c70824f51d9',
        'b089c1e913ff21fa99938ba03406abb0', 1),
       (20, 'd1', 'e10adc3949ba59abbe56e057f20f883e', '7ff5be5555a0ae77d61d5dec0729b5c6',
        '367fdb8539dbb5862b09fd47eed96a5d', 1),
       (21, 'jiji', 'e10adc3949ba59abbe56e057f20f883e', '64ae4918108e2db321413ed8c4af441d',
        '65bb7d088070cd347bb47111cc3ce6ed', 1),
       (22, 'kl', 'e10adc3949ba59abbe56e057f20f883e', 'fc152ba3caa061438f5d8c98c8ee1093',
        '477c02e015d7969bc7663f74fef16f21', 1),
       (23, 'asdf', 'd53732ccbfa4af28b3c0e7665cf69009', 'bfd81ee3ed27ad31c95ca75e21365973',
        'dcbc57e04b409f0df2dc340931c6cdc2', 1),
       (24, 'zyjbaby', 'e9cc3bca19861fc3bb074d008eb49504', '2c4e943bfec6799564866da49d93994b',
        'b423115153cdb9f22df1e8ea22ee77ec', 1);
/*!40000 ALTER TABLE `computeruser`
    ENABLE KEYS */;
UNLOCK TABLES;