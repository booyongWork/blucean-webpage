package home.bluceanWebpage.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
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
    public String platformDev() {

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
