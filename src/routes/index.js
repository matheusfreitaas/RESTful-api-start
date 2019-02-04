import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDb from '../db';
import foodTruck from '../controller/foodTruck';

let router = express();

//Connect db
initializeDb(db => {

   //internal middleware
   router.use(middleware({config, db}));
   
   //api routes v1 (/v1)
   router.use('/foodTruck', foodTruck({config, db}));

});

export default router;