import mongoose from 'mongoose';
import {Router} from 'express';
import Restaurant from '../model/restaurant';

export default({config, db}) => {
   let api = Router();

   // 'v1/restaurant/add'
   api.post('/add', (req, res) => {
      let newRestaurant = new Restaurant();
      newRestaurant.name = req.body.name;

      newRestaurant.save(err => {
         if (err) {
            res.send(err);
         }
         res.json({message: 'Restaurant saved successfully'});
      });
   });

   // 'v1/restaurant/' 
   api.get('/', (req, res) => {
      Restaurant.find({}, (err, restaurants) => {
         if(err){
            res.send(err);
         }
         res.json(restaurants);
      });
   });

   // 'v1/restaurant/:id'
   api.get('/:id', (req, res) => {
      Restaurant.findById(req.params.id, (err, restaurant) => {
         if(err) {
            res.send(err);
         }
         res.json(restaurant);
      })
   });

   // 'v1/restaurant/:id'
   api.put('/:id', (req, res) => {
      Restaurant.findById(req.params.id, (err, restaurant) => {
         if (err){
            res.send(err);
         }
         restaurant.name = req.body.name;

         restaurant.save(err => {
            if (err){
               res.send(err);
            }
            res.json({message: "Restaurant info updated"});
         });
      });
   });

   // 'v1/restaurant/:id'
   api.delete('/:id', (req, res) => {
      Restaurant.findByIdAndRemove(req.params.id, (err, restaurant) => {
         if(err) {
            res.send(err);
         }
         res.json({message: "Restaurant successfully removed"});
      });
   });

   return api;
}