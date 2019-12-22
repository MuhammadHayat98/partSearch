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

    async destroy ({ params, auth, request, response }) {
        await auth.logout()
    
        return response.route('/')
      }
   
    
}

module.exports = LoginController
