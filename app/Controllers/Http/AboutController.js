'use strict'

class AboutController {
    async view({view}){
        return view.render('about')
    }
}

module.exports = AboutController
