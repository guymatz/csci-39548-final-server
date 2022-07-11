/*==================================================
/database/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "https://www.seekpng.com/ipng/u2q8o0y3e6u2w7y3_graduate-cap-vector-student-icon/"
  },

  gpa: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      min: 0,
      max: 4
    }
  }
});

// Export the student model
module.exports = Student;
