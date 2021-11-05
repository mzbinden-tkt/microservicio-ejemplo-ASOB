const express = require('express')
const mongoose = require('mongoose')
const axios = require('axios')

const Order = require('../Entities/Order')
const pathCustomerService = 'http://localhost:5000/customer'
const pathBookService = 'http://localhost:3000/book'

const postOrder = async (req, res) => {
  try {
    const newOrder = new Order({
      customerID: new mongoose.Types.ObjectId(),
      bookID: new mongoose.Types.ObjectId(),
      title: req.body.title,
      description: req.body.description,
    })
    await newOrder.save()
    res.send('New order added successfully!')
  } catch (error) {
    res.status(500).send('Internal Server Error!')
  }
}

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
    if (orders) {
      res.json(orders)
    } else {
      res.status(404).send('Orders not found')
    }
  } catch (error) {
    res.status(500).send('Internal Server Error!')
  }
}

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
    if (order) {
      res.json(order)
    } else {
      res.status(404).send('Orders not found')
    }
  } catch (error) {
    res.status(500).send('Internal Server Error!')
  }
}

module.exports = { postOrder, getOrders, getOrderById }
