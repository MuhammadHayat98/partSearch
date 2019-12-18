'use strict'

class ForgetController {
    async view({view}){
        return view.render('forget')
      }
}

module.exports = ForgetController
