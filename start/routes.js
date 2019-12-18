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

Route.on('/','LoginController.view')
// Route.get('/listing/:product', 'ListingController.list')
Route.get('/listing','ListingController.view');
Route.get('/products/:product', 'ProductController.search')
Route.get('search','SearchController.view')
Route.get('about','AboutController.view')
Route.get('login','LoginController.view')
Route.post('login','LoginController.login')
Route.get('register','RegisterController.view')
Route.get('forget','ForgetController.view')

