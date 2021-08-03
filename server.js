const express = require('express')
const path = require('path');
const time =require('./middleware/time')
const app = express ()
const port=3310
app.use(time)
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.send('GEt  homepage');
});
app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname, './home.html'));
  });
  app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname, './contact.html'));
  });
  app.get('/service', function(req, res) {
    res.sendFile(path.join(__dirname, './service.html'));
  });
  
  
app.listen( port,( )=> console.log ('helooooooo,3310') )