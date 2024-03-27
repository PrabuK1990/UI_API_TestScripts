class Academy {

    openUrl(){
        cy.visit("https://academybugs.com/find-bugs/#")
    }

    addtoCart(){
        return cy.get('#ec_add_to_cart_5')
    }

    vireCart(){
        return cy.get('.ec_product_added_to_cart > a')
    }

    plusButton(){
        return cy.get('.ec_plus')
    }

    checkoutButton(){
        return cy.get('.ec_cart_button_row_checkout > .ec_cart_button')
    }

    billinCountry(){
        return cy.get('#ec_cart_billing_country')
    }

    billingFirstname(){
        return cy.get('#ec_cart_billing_first_name')
    }

    billingLastname(){
        return cy.get('#ec_cart_billing_last_name')
    }

    billingCompanyName(){
        return cy.get('#ec_cart_billing_company_name')
    }

    billinAddress(){
        return cy.get('#ec_cart_billing_address')
    }

    billingCity(){
        return cy.get('#ec_cart_billing_city')
    }

    billingState(){
        return cy.get('#ec_cart_billing_state_IN')
    }

    billingZip(){
        return cy.get('#ec_cart_billing_zip')
    }

    billingPhone(){
        return cy.get('#ec_cart_billing_phone')
    }

    billingEmail(){
        return cy.get('#ec_contact_email')
    }

    billingRetypeEmail(){
        return cy.get('#ec_contact_email_retype')
    }

    billingContiueShopping(){
        return cy.get('.ec_cart_button_row.ec_show_two_column_only > .ec_cart_button')
    }

}

export default Academy