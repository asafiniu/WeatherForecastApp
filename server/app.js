const port = 5000;
const express = require('express')
const weatherRouter = require('./routes/weather')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Custom routes
app.use('/weather', weatherRouter);
// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
module.exports = app;
