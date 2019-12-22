'use strict'
const User = use('App/Models/User')

class RegisterController {
  async view({view}){
    return view.render('register')
  }

  async store({request,response, session}){
    console.log('test')
    const user = await User.create({
      username: request.input('usernamesignup'),
      email: request.input('emailsignup'),
      password: request.input('passwordsignup')
    })
    session.flash({successMessage:'Registered successfully'})
    return response.redirect('/')
  }
}

module.exports = RegisterController
