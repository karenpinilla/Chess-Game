const app = require('express')();
const bodyParser = require('body-parser');
const positionController = require('./positionController');

const port = 3001;

app.use(bodyParser.json());

app.post('/api/position', positionController.currentPosition, (req, res) => {
  res.json(res.locals.positions);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
