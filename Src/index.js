
const app = require('./app');
const http = require('http');
const socketio = require('socket.io');

const server = http.createServer(app);
const io = socketio.listen(server);

io.on('connection', socket => {
    console.log('new user connected');
});

//static files
app.use(express.static("public"));

//starting the server
app.listen(3000, () => {
    console.log('Server on port 3000')
});