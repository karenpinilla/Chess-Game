const app = require('express')();
const bodyParser = require('body-parser');
const positionController = require('./positionController');

const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/position', positionController.currentPosition, (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
