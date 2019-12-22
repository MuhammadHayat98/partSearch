'use strict'

class LoginController {
    async view({view}){
        return view.render('login')
    }

    async login({ request, auth, session, response }){
        await auth.attempt(request.input('email'), request.input('password'))

        session.flash({ successMessage: 'You have logged in successfully!' })

        return response.route('search')
    }
   
    
}

module.exports = LoginController
