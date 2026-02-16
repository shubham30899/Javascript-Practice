const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: false }));


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));

const taskRoutes = require('./routes/taskRoute');
app.use('/', taskRoutes);

app.use((req,res)=>{
    res.status(401).send("Page Not found")
})

app.listen(3000);
