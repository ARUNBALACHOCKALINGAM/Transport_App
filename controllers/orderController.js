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

  exports.getsingleorder = function(req,res){

    let order = new Order();
    order.getsingleorder(req.body).then(function(docs){
      res.status(200).json(docs);
    }).catch(e =>{
      res.json(e);
    })
  }

  exports.changeStatus = function(req,res){
    let order = new Order();
    order.changestatus(req.body).then(function(docs){
      res.status(200).json(docs);
    }).catch(e =>{
      res.json(e);
    })
  }

  exports.deleteorder = function(req,res){
    let order = new Order();
    order.deleteorder(req.body).then(function(docs){
      res.status(200).json(docs);
    }).catch(e =>{
      res.json(e);
    })
  }