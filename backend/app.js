import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
// import logger from 'morgan';
// import favicon from 'serve-favicon';
import Debug from 'debug';
import path from 'path';
import lessMiddleware from 'less-middleware';
import mongoose from 'mongoose';

// Import routes so that they are available to app
import index from './routes/index';
import auth from './routes/auth';


/**
* Setup Mongoose connection to MongoDB/Mlab
*/
mongoose.connect('mongodb://admin:admin@ds157233.mlab.com:57233/jot');
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});
mongoose.Promise = global.Promise;
const app = express();
const debug = Debug('backend:app');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// Routes being made available
app.use('/', index);
app.use('/auth', auth);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
/* eslint no-unused-vars: 0 */
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Handle uncaughtException
process.on('uncaughtException', (err) => {
  debug('Caught exception: %j', err);
  process.exit(1);
});

export default app;
