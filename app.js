const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const Nexmo = require('nexmo');
const socketio = require('socket.io');

// Init Nexmo
const nexmo = new Nexmo({
    apiKey: '961599df',
    apiSecret: 'gY6GcSVN7GX1IFpg',
}, {debug: true});

// Init App
const app = express();

// Templeta engine setup
app.set('view engine', 'html');
app.engine('html',ejs.renderFile);

// Public folder set Up
app.use(express.static(__dirname + '/public'));

// Body parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Index Route
app.get('/',(req, res) =>{
    res.render('index');
});

// Catch from SUbmit
app.post('/',(req,res)=>{
  //  res.send(req.body);
  //  console.log(req.body);
  const number = req.body.number;
  const text = req.body.text;
  
  nexmo.message.sendSms(
      'UMUKORO-SOFTWARE', number, text, {type: 'unicode'},
      (err,responseData)=>{
          if(err){
              console.log(err);
          }else{
              console.dir(responseData);
              //GET data From response
              const data = {
                  id: responseData.messages[0]['message-id'],
                  number: responseData.messages[0]['to']
              }
              // Emit to The Client
              io.emit('smsStatus', data);
          }
      }
  );
});
//define port 
const port = 3000;

// Start Server
const server = app.listen(port,()=>{
    console.log(`server is running at port ${port}..`);
});

// Connect to Socket.io
const io = socketio(server);
io.on('connection',(socket)=>{
    console.log('Connected');
    io.on('disconnect', ()=>{
        console.log('Disconnected');
    });
})