describe('validation for restfull booker', () =>{

    var appurl = "https://restful-booker.herokuapp.com"
    var id 

    it('get bookings', () =>{
        cy.request({
            method: 'GET',
            url: appurl+'/booking'
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('create bookings', () =>{
        cy.request({
            method: 'POST',
            url: appurl+'/booking',
            body:{
                firstname : "Prabu",
                lastname : "Kumaravel",
                totalprice : 111,
                depositpaid : true,
                bookingdates : {
                    checkin : "2018-01-01",
                    checkout : "2019-01-01"
                },
                additionalneeds : "Breakfast"
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.booking.firstname).to.eq("Prabu")
            expect(response.body.booking.lastname).to.eq("Kumaravel")
            cy.log(response.body.bookingid);
            id = response.body.bookingid;
        })
    })

    
    it('Update bookings', () =>{
        cy.request({
            method: 'PUT',
            url: appurl+'/booking/'+id,
            body:{
                firstname : "Prabu",
                lastname : "K",
                totalprice : 111,
                depositpaid : true,
                bookingdates : {
                    checkin : "2018-01-01",
                    checkout : "2019-01-01"
                },
                additionalneeds : "Breakfast"
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.booking.firstname).to.eq("Prabu")
            expect(response.body.booking.lastname).to.eq("K")
        })
    })

    it('Delete bookings', () =>{
        cy.request({
            method: 'DELETE',
            url: appurl+'/booking/'+id
        })
        .then((response) => {
            expect(response.status).to.eq(201)
        })
    })

})