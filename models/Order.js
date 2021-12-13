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
       
        this.data.orderno=Math.floor(Math.random()*10000).toString();
        this.data.status="available"
         
        orderCollection.insertOne(this.data).then(() => {
          resolve(this.data.orderno)
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

Order.prototype.getsingleorder = function(orderid){
  return new Promise((resolve,reject)=>{
    console.log(orderid.id);
    orderCollection.findOne({orderno:orderid.id}).then(docs => {
    resolve(docs);
    }).catch(e=>{
      reject("Something went wrong");
    })
    
    
  })
}


Order.prototype.changestatus = function(orderid){
  return new Promise((resolve,reject)=>{
    console.log(orderid.id);
    orderCollection.findOneAndUpdate({orderno:orderid.id},{$set:{status:"booked"}}).then(docs => {
    resolve(docs);
    }).catch(e=>{
      reject("Something went wrong");
    })
    
    
  })
}

Order.prototype.deleteorder = function(orderid){
  return new Promise((resolve,reject)=>{
    console.log(orderid.id);
    orderCollection.remove({orderno:orderid.id}).then(docs => {
    resolve(docs);
    }).catch(e=>{
      reject("Something went wrong");
    })
    
    
  })
}



module.exports = Order;