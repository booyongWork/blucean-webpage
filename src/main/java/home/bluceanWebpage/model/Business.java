package home.bluceanWebpage.model;

public class Business {
    private String CompanyLogo;
    private String CompanyName;
    private String description;

    // 생성자
    public Business(String CompanyLogo, String CompanyName,  String description) {
        this.CompanyLogo = CompanyLogo;
        this.CompanyName = CompanyName;
        this.description = description;
    }

    // 게터 세터
    public String getCompanyLogo() {
        return CompanyLogo;
    }

    public void setCompanyLogo(String companyLogo) {
        CompanyLogo = companyLogo;
    }

    public String getCompanyName() {
        return CompanyName;
    }

    public void setCompanyName(String companyName) {
        CompanyName = companyName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
