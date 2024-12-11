import login from "../../support/page_object/LoginPage.cy";
describe('Login Functionality', () => {
    const login1 = new login();
    it('login with valid credentials', () => {
        login1.enterUrl();
        login1.LoginOrangeHrm();
    });
});