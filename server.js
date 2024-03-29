let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');


// Express Route
const postRoute = require('./routes/post.route')

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || dbConfig.db, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/posts', postRoute)

// app.use(express.static(path.join(__dirname, 'build')));
    
//     app.get('/', function (req, res) {
//       res.sendFile(path.join(__dirname, 'build', 'index.html'));


// PORT
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Connected to port ' + port)
})
.then(res.send(`<h1>2021 Max Server</h1>`)))

// 404 Error
app.use((req, res, next) => {
   next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});