import fs from 'fs';

export default function handler(req, res) {
  const json = fs.readFileSync('data.json', 'utf-8');
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(json);
}
