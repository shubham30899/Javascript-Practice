//const Task = require('../models/task');
const pool = require('../database/db');

exports.list = async (req, res) => {
    //const tasks = await Task.find();
    const { rows } = await pool.query('SELECT user_name FROM users');
    console.log("result",rows);
    
    res.render('task', { tasks: rows});

    //res.send("Welcome")
};
exports.create = async (req, res) => {
    try {
    //const { user_name } = req.body;
    console.log(req.body);
    

    await pool.query(
      'INSERT INTO users (user_name) VALUES ($1)',
      [req.body]
    );

    res.redirect('/tasks'); // or wherever your listing route is
  } catch (err) {
    console.log(err);
    
    //next(err);
  }
};
