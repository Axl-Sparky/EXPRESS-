export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const body = await new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => data += chunk);
    req.on('end', () => resolve(data));
  });

  const params = new URLSearchParams(body);
  const password = params.get('password');

  if (password === '₹ajsal120&') {
    // Redirect to dashboard
    res.writeHead(302, {
      Location: '/sparky/dashboard'
    });
    res.end();
  } else {
    res.writeHead(401, { 'Content-Type': 'text/html' });
    res.end('<h2 style="color:red;text-align:center;">Incorrect password!</h2><a href="/sparky">Go back</a>');
  }
}
