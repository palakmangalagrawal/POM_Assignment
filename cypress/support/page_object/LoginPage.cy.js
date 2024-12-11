class login {
    enterUrl(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }
    LoginOrangeHrm() {
        cy.get('[placeholder="Username"]').type("Admin")
        cy.get('[placeholder="Password"]').type("admin123")
        cy.get('[type="submit"]').click()
    }
}
export default login;