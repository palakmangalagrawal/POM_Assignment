class Navbar{
    visitHomePage(){
        cy.visit("https://www.flipkart.com/")
    }
    clickHome(){
        cy.get('a[title="Flipkart"]').click();

    }
    clickContactUs(){
       cy.get('[aria-label="Contact Us"]').click({ force: true })
       cy.url('include',"helpcentre?otracker")
    }
    clickAboutLink(){
        cy.contains('About Us').click()
    }
    
}
export default Navbar;