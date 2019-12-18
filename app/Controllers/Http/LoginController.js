'use strict'

class LoginController {
    async view({view}){
        return view.render('login')
    }

    async login({view,request}){
        console.log(request)
    }
   
    
}

module.exports = LoginController
