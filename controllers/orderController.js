const Order = require("../models/Order");

exports.createOrder = function(req, res) {

    let order = new Order(req.body);
    order
      .create()
      .then(function(newId) {
        res.json(newId)
      })
      .catch(function(errors) {
        res.json(errors)
      })
  }

  exports.getOrders = function(req,res){
    let order = new Order();
    order.getOrders().then(function(docs){
      console.log(docs);
      res.status(200).json(docs)
    }).catch(e => {
      res.json(e);
    })
  }