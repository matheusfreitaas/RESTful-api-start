import mongoose from 'mongoose';
import foodTruck from './foodTruck';
let Schema = mongoose.Schema;

let reviewSchema = new Schema({
   title: {
      type: String,
      required: true
   },
   text: String,
   foodTruck: {
      type: Schema.Types.ObjectId,
      ref: 'FoodTruck',
      required: true
   }
});

module.exports = mongoose.model('Review', reviewSchema);