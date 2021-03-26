const dotenv;
const app = require('./app');

console.log(process.env);

// start server
const port = 3000;

app.listen(port, () => {
  console.log(`App is running on port ${port}.....`);
});
