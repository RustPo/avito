require('dotenv').config();
const path = require('path');

const express = require('express');
const morgan = require('morgan');
const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);
const cors = require('cors');
const { dbCheck } = require('./src/lib/dbCheck');

const apiRouter = require('./src/routes/api.router');

const sessionConfig = {
  name: process.env.COOKIE_NAME,
  store: new FileStore(),
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
  },
};

const app = express();
const PORT = process.env.PORT || 3000;
const CLIENT_PORT = process.env.CLIENT_PORT || 5173;

app.use(
  cors({
    origin: [`http://localhost:${CLIENT_PORT}`],
    credentials: true,
  }),
);

app.use(expressSession(sessionConfig));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

dbCheck();

app.listen(PORT, () => {
  console.log('Server starting on PORT', PORT);
});
