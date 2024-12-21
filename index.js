import express from 'express';

const app = express();

import axios from 'axios';



const getAxl = async function(url, options) {
  try {
    options ? options : {};
    const res = await axios({
      method: "GET",
      url: url,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
      },
      ...options,
    });
    return res.data;
  } catch (err) {
    return err;
  }
}



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
    const apiUrl = `https://api.devstackx.in/v1/igstory/username?id=${query}`;
    const response = await getAxl(apiUrl);
  
    // If the response is not OK, return an error
    if (!response.ok) {
      return res.status(404).json({ error: 'Unable to fetch data from external API' });
    }

    // Parse the JSON response from the external API
    const rsi = await response.data

    // Assuming the response from the external API contains a 'download_url' field
    if (!rsi) {
      return res.status(400).json({ error: 'No download URL found in the response' });
    }

    // Send the download URL in the response to the client
    res.json({
      track: query,        // You can return the query or track info
      download_url: rsi  // The download URL from the external API
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

