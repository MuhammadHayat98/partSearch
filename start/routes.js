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

Route.on('/').render('welcome')
// Route.get('/listing/:product', 'ListingController.list')
Route.on('/listing').render('listing');
Route.get('/products/:product', 'ProductController.search')
Route.on('search',).render('search')
Route.on('about',).render('about')
Route.on('login',).render('login')
Route.on('register',).render('register')
Route.on('forget',).render('forget')
