const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newPage,
    create,
    index,
    delete: deleteOne,
    show
  };

  function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      Ticket.find({flight: flight._id}, function(err, tickets) {
        res.render('flights/show', {flight, tickets});
        console.log(tickets)
      })
    });
  }

  function deleteOne(req, res) {
    Flight.findByIdAndDelete(req.params.id, function(err, flight){
      res.redirect('/flights')
    })
  }
  
  function index(req, res) {
    Flight.find({}, function(err, flights) {
      res.render('flights/index', {flights});
    });
  }
  
  function create(req, res) {
    if (!req.body.departs) {
          const defaultDate = new Date();
          defaultDate.setFullYear(defaultDate.getFullYear() + 1);
          req.body.departs = defaultDate;
      }
    const flight = new Flight(req.body);
    flight.save(function(err) {
      if (err) return res.render('flights/new');
      console.log(flight);
      res.redirect('/flights');
    });
  }
  
  function newPage(req, res) {
    res.render('flights/new');
  }