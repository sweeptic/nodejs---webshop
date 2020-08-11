const path = require('path');
const express = require('express');
const app = express();
const port = 3020;

app.set('view engine', 'ejs');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

// routes
app.use('/admin', adminRoutes);
app.use(express.static(path.join(__dirname, 'public')));
// app.use(shopRoutes);
app.use(errorController.get404);

app.listen(port)