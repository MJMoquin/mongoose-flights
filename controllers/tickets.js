const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicketPage,
    create,
    delete: deleteOne
    
}

function newTicketPage(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('tickets/new', {title: 'Add a New Ticket', flight});
    });
}

function create(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function (err, tickets) {  
      res.redirect(`/flights/${req.params.id}`);
    })
};

function deleteOne(req, res) {
    Ticket.findByIdAndDelete(req.params.tid, function(err, ticket) {
        res.redirect(`/flights/${req.params.fid}`)
    })
}