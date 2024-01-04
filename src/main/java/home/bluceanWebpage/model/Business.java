package home.bluceanWebpage.model;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class Business {
    private String companyLogo;
    private String companyName;
    private String description;
    private String period;


    // 생성자
    public Business(String companyLogo, String companyName,  String description, String period) {
        this.companyLogo = companyLogo;
        this.companyName = companyName;
        this.description = description;
        this.period = period;
    }


}
