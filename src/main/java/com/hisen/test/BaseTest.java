package com.hisen.test;

/**
 * Created by hisenyuan on 2017/5/3 at 19:40.
 */

import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 * 配置spring和junit整合，junit启动时加载springIOC容器 spring-test,junit
 */
@RunWith(SpringJUnit4ClassRunner.class)
// 告诉junit spring配置文件
@ContextConfiguration({"../../../../resources/spring/spring-dao.xml", "classpath:spring/spring-service.xml"})
public class BaseTest {

}