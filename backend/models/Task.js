//Specifies User Attributes and methods for manipulations
//Will be exported to Routes for CRUD manipulation
//Will be exported to App.js for app to receive user details

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  priority: String,
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema)

module.exports = Task;
