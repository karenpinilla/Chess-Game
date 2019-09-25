const app = require('express')();
const bodyParser = require('body-parser');
const positionController = require('./positionController');

const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// app.use((req, res) => {
//   res.setHeader('Content-Type', 'text/plain');
// });

app.post('/api/position', (req, res) => {
  console.log('from post body', req.body);
  res.send('Hello World!');
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
