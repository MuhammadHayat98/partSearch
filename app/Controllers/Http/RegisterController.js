'use strict'

class RegisterController {
  async view({view}){
    return view.render('register')
  }
}

module.exports = RegisterController
