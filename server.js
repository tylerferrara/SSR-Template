import express from 'express';
const app = express();
const PORT = 3000;
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App';
import fs from 'fs';

const html = fs.readFileSync(__dirname + '/dist/index.html', 'utf8');

app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.send(html.replace('<!-- APP -->', renderToString(<App />)));
})

app.listen(PORT, () => {
  console.log("Server started on port: " + PORT)
})
