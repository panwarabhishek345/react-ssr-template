import homeRoutes from './home'

function routes(app){
   app.use('/',homeRoutes)
}

export default routes;