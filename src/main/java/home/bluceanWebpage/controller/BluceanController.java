package home.bluceanWebpage.controller;

import lombok.extern.slf4j.Slf4j;
import home.bluceanWebpage.model.Business;
import org.slf4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;


import java.util.ArrayList;
import java.util.List;

@Slf4j
@Controller
public class BluceanController {

    /**
     * init 페이지
     *
     */
    @GetMapping("hello")
    public String hello(Model model) {
        model.addAttribute("data", "hello!!");
        return "views/hello";
    }

    /**
     * 플랫폼 개발 페이지
     *
     */
    @GetMapping("platformDev")
    public String platformDev(Model model) {
        List<Business> businessList = new ArrayList<>();
        businessList.add(new Business("/img/businessLogo/img_s1_01.png", "현대자동차", "현대자동차 중고차 E-Commerce 개발"));
        businessList.add(new Business("/img/businessLogo/img_s1_02.png", "신세계", "신세계 I&C API 플랫폼 개발"));
        businessList.add(new Business("/img/businessLogo/img_s1_03.png", "한국투자", "한국투자증권 리뉴얼"));
        businessList.add(new Business("/img/businessLogo/img_s1_04.png", "대신증권", "대신증권 마이데이터 시스템 구축"));
        businessList.add(new Business("/img/businessLogo/img_s1_05.png", "kt alpha", "쇼핑 E-Commerce 차세대 시스템 개발"));
        businessList.add(new Business("/img/businessLogo/img_s1_07.png", "seezn", "KT OTT 플랫폼(시즌) 추천/검색 시스템 구축"));
        businessList.add(new Business("/img/businessLogo/img_s1_08.png", "whowho", "Biz WhoWho 차세대 플랫폼 구축"));
        businessList.add(new Business("/img/businessLogo/img_s1_11.png", "kt ds", "RCS (Rich Contents Service) 허브 플랫폼 구축"));
        businessList.add(new Business("/img/businessLogo/img_s1_13.png", "단국대학교", "단국대학교 교육지원 시스템 및 서비스 개발"));
        businessList.add(new Business("/img/businessLogo/img_s1_17.png", "kbank", "케이뱅크 API 플랫폼 고도화 개발"));
        businessList.add(new Business("/img/businessLogo/img_s1_18.png", "LS ITC", "LS ITC 전기차 관제플랫폼 개발"));
//        businessList.add(new Business("/img/businessLogo/img_s1_18.png", "TEST", "LS ITC 전기차 관제플랫폼 개발"));
//        businessList.add(new Business("/img/businessLogo/img_s1_18.png", "TEST", "LS ITC 전기차 관제플랫폼 개발"));

        model.addAttribute("businessList", businessList);
        return "views/platformDev";
    }

    /**
     * 플랫폼 운영 페이지
     *
     */
    @GetMapping("platformOps")
    public String platformOps() {

        return "views/platformOps";
    }

    /**
     * 솔루션 페이지
     *
     */
    @GetMapping("solutionDev")
    public String solutionDev() {

        return "views/solutionDev";
    }


}
