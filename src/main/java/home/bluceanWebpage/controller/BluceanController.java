package home.bluceanWebpage.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class BluceanController {
    @GetMapping("hello")
    public String hello(Model model) {
        model.addAttribute("data", "hello!!");
        return "views/hello";
    }

    @GetMapping("platformDev")
    public String platformDev() {

        return "views/platformDev";
    }

    @GetMapping("solutionDev")
    public String solutionDev() {

        return "views/solutionDev";
    }
}
