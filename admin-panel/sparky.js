export default async function handler(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.end(`
    <html>
      <head>
        <title>VX-OFC Admin Login</title>
        <style>
          body { background: black; color: white; font-family: sans-serif; text-align: center; padding-top: 100px; }
          input { padding: 10px; font-size: 16px; }
          button { padding: 10px; font-size: 16px; background: white; color: black; border: none; }
        </style>
      </head>
      <body>
        <h2>VX-OFC Admin Login</h2>
        <form method="POST" action="/sparky/login">
          <input type="password" name="password" placeholder="Enter Admin Password" required />
          <br><br>
          <button type="submit">Login</button>
        </form>
      </body>
    </html>
  `);
}
