const express = require('express')
const bodyParser = require('body-parser');
const personalityInsights = require('./server/watson')
const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(express.static('build'))

// Catch all get route to index page.
app.get('/*', (req, res) => {
  res.sendFile( __dirname + "/build/" + "index.html" )
})

// Post to Watson
app.post('/api', (req, res) => {
  console.log('posted to server');
  const text = req.body.resume + ' ' + req.body.cover
  const response = {
    personality: [
      {
        name: 'Openness',
        percentile: .95
      },
      {
        name: 'Kindness',
        percentile: .80
      }
    ]
  }

  res.send(JSON.stringify(response, null, 2))
  // personalityInsights.profile({
  //     text: text,
  //     consumption_preferences: false
  //   },
  //   (err, response) => {
  //     if (err) {
  //       console.log('error:', err)
  //       res.status(500).send(err)
  //     } else {
  //       console.log("success")
  //       res.send(JSON.stringify(response, null, 2))
  //     }
  //   });
})

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})