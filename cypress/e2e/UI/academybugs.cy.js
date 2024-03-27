import Academy from "../PageObjects/Academy"

describe('Scenarios validation', () =>{

    let userdata
    const page = new Academy()

    before(() =>{
        cy.fixture('example').then((data)=>{
            userdata=data
        })
    })

    it('add to cart scenario', () =>{
        page.openUrl()
        page.addtoCart().click()
        page.vireCart().click()
        page.plusButton().click()
        page.checkoutButton().click()
        page.billinCountry().select(userdata.country)
        page.billingFirstname().type(userdata.firstname)
        page.billingLastname().type(userdata.lastname)
        page.billingCompanyName().type(userdata.company)
        page.billinAddress().type(userdata.address)
        page.billingCity().type(userdata.city)
        page.billingState().select(userdata.state)
        page.billingZip().type(userdata.zip)
        page.billingPhone().type(userdata.phone)
        page.billingEmail().type(userdata.email)
        page.billingRetypeEmail().type(userdata.retypeEmail)
        page.billingContiueShopping().click()
    })
})