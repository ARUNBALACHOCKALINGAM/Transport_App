const orderCollection = require('../db').db().collection("orders")
var mongoose = require('mongoose');
const User = require('./User')
const sanitizeHTML = require('sanitize-html')

let Order = function(data,get) {
  this.data = data
  this.errors = []
}

Order.prototype.create = function() {

    return new Promise((resolve, reject) => {
    
        orderCollection.insertOne(this.data).then(() => {
          resolve("New order created")
        }).catch(e => {
          reject("Something went wrong")
        })
    
    })
  }

Order.prototype.getOrders = function(){

  return new Promise((resolve,reject)=>{
    orderCollection.find().toArray().then(docs => {
    const data=[];
    docs.map((doc)=>{
      data.push({id:doc._id,name:doc.sendersDetails.firstname,source:doc.sendersDetails.address,destination:doc.recieversDetails.address,goodstype:doc.sendersDetails.goodstype,status:doc.status,orderno:doc.orderno})
    })
    resolve(data);
    }).catch(e=>{
      reject("Something went wrong");
    })
    
    
  })
}



module.exports = Order;