'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')



Route.get('/listing','ListingController.view')

Route.get('search','SearchController.view').middleware(['auth'])
Route.get('about','AboutController.view')

Route.get('/','LoginController.view')
Route.post('login','LoginController.login').as('login.login')
Route.post('/logout', 'LoginController.destroy').as('logout')
Route.get('/register','RegisterController.view').as('register.view')
Route.post('/register','RegisterController.store').as('register.store')



