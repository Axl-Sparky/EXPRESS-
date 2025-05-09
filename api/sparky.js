export default async function handler(req, res) {
  const { method, body, query } = req;

  if (method === 'POST') {
    const { password } = JSON.parse(body || '{}');
    if (password === '₹ajsal120&') {
      return res.status(200).json({ success: true });
    } else {
      return res.status(403).json({ success: false, message: 'Wrong password' });
    }
  }

  return res.status(405).send('Method not allowed');
}
