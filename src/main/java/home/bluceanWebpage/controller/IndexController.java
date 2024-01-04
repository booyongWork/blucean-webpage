package home.bluceanWebpage.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Slf4j
@Controller
public class IndexController {

    @RequestMapping("/main")
    public String mainPage() {
       log.info("############### IndexController mainPage ###############");

        return "views/main";
    }

}
