const mongoose = require('mongoose');
// optional shortcut variable
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: {
    type: String,
    required: true,
    enum: ['American', 'United', 'Southwest']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    default: function() {
      const defaultDate = new Date();
      defaultDate.setFullYear(defaultDate.getFullYear);
      return defaultDate();
    }
  }
});

module.exports = mongoose.model('Flight', flightSchema);
