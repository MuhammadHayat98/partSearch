'use strict'
const User = User('App/Models/User')

class RegisterController {
  async view({view}){
    return view.render('register')
  }

  async store({request,response}){
    console.log('test')
    // const user = await User.view({
    //   username: request.input('usernamesignup'),
    //   email: request.input('emailsignup'),
    //   password: request.input('passwordsignup'),
    //   password_confirm: request.input('passwordsignup_confirm'),
    // })
    // sessionStorage.flash({successMessage:'yes'})
    // return response.redirect('back')
  }
}

module.exports = RegisterController
