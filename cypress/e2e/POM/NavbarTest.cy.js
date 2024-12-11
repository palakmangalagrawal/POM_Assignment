import Navbar from "../../support/page_object/NavbarPage.cy";
describe('Checking About link', () => {
    const ClickLink = new Navbar();
it('Redirect to the about page', () => {
    ClickLink.visitHomePage();
    ClickLink.clickHome();
    ClickLink.clickContactUs();
    ClickLink.clickAboutLink();
  });
  
});