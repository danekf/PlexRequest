require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT;

//routes
const defaultRoute = require('./routes/homeRoutes');
const movieRoutes  = require('./routes/moviesRoutes');
const showRoutes = require('./routes/showsRoutes');
const adminRoutes = require('./routes/adminRoutes');

//MIDDLEWARE

  //--CORS
const cors = require('cors');

    //***TODO***
    //later in dev, must allow cors only from single origin
app.use(cors());

  //--access json data in requests
app.use(express.json());

  //--log requests
app.use( (req, res, next ) => {
  console.log('incoming request...');
  console.log(req.path, req.method);
  next();
});

//ROUTES
app.use('/', defaultRoute);
app.use('/api/movies', movieRoutes);
app.use('/api/shows', showRoutes);
app.use('/api/admin', adminRoutes);

//TESTING
const {exportLibrary, getLibraryExportById} = require('./TautilliCommands/exportPlexLibrary');
// exportLibrary('11');

getLibraryExportById('10');



//MONGOOSE
const username = process.env.P_CLUSTER_USERNAME;
const password = process.env.P_CLUSTER_PASSWORD;
const pDataURI = "mongodb+srv://" + username + ":" + password + "@p-cluster.cbwratb.mongodb.net/pData?retryWrites=true&w=majority";

//connect to db
mongoose.connect(pDataURI)
.then(()=>{
  console.log('connected to db')
    //listener
    app.listen(PORT, ()=>{
      console.log('listneing on port', PORT, '...')
    })
  })
  .catch((error)=>{
    console.log(error);
  }
  )

