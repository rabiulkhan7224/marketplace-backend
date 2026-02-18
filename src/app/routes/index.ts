import express, { Router } from 'express';


const routers: Router = express.Router();


const moduleRoutes = [
  {
    path: '/demo-modules',
    route: 
  }
];


moduleRoutes.forEach(route => {
  routers.use(route.path, route.route);
});

export default routers;
