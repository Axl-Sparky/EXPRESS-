const express = require('express');
import fetch from 'node-fetch'; // For making HTTP requests
const app = express();

// Set JSON formatting for response
app.set('json spaces', 2);

// Define the /sfys route to handle requests
app.get('/sfys', async (req, res) => {
  const query = req.query.query;  // This is the query parameter

  if (!query) {
    return res.status(400).json({ error: 'No query parameter provided' });
  }

  try {
    // Make a request to the external API with the provided query
    const apiUrl = `https://ameen-api.vercel.app/sfys?query=${encodeURIComponent(query)}`;
    const response = await fetch(apiUrl);

    // If the response is not OK, return an error
    if (!response.ok) {
      return res.status(404).json({ error: 'Unable to fetch data from external API' });
    }

    // Parse the JSON response from the external API
    const data = await response.json();

    // Assuming the response from the external API contains a 'download_url' field
    if (!data.download_url) {
      return res.status(400).json({ error: 'No download URL found in the response' });
    }

    // Send the download URL in the response to the client
    res.json({
      track: query,        // You can return the query or track info
      download_url: data.download_url  // The download URL from the external API
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching track details' });
  }
});

// Start the server on port 8080 or the environment port
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
