const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');

const tasks = {
  1: { id: '1', text: 'Read description of programming challenge' },
  2: { id: '2', text: 'Implement awesome web app' },
  3: { id: '3', text: 'Polish project' },
  9: { id: '9', text: 'Send solution to LogMeIn' },
};

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/public/index.html`));
});

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  console.log('POST a new Task', req.body);
  if (!req.body || !req.body.id || !req.body.text) {
    res.status(400).send('Invalid task format');
    return;
  }
  if (tasks[req.body.id]) {
    res.status(409).send('Conflict. Task already defined');
    return;
  }

  tasks[req.body.id] = {
    id: req.body.id,
    text: req.body.text,
  };
  res.status(204).send();
});

app.put('/api/tasks/:id', (req, res) => {
  console.log('PUT a new Task', req.params.id, req.body);
  if (!tasks[req.params.id]) {
    res.status(404).send();
    return;
  }

  tasks[req.params.id].text = req.body.text;
  res.status(204).send();
});

app.delete('/api/tasks/:id', (req, res) => {
  if (!tasks[req.params.id]) {
    res.status(404).send();
    return;
  }

  delete tasks[req.params.id];
  res.status(204).send();
});

app.listen(3000, () => {
	  console.log('To-Do app listening on port 3000!');
});
