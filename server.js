const express = require('express')
const bodyParser = require('body-parser')
const personalityInsights = require('./server/watson')
const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(express.static('build'))

// Catch all get route to index page.
app.get('/*', (req, res) => {
  res.sendFile( __dirname + "/build/" + "index.html" )
})

// Post to Watson.
app.post('/api', (req, res) => {
  console.log('posted to server')
  const text = req.body.resume + ' ' + req.body.cover
  // const response = {
  //   personality: [
  //     {
  //       name: 'Openness',
  //       percentile: .95
  //     },
  //     {
  //       name: 'Kindness',
  //       percentile: .80
  //     }
  //   ]
  // }
  // res.send(JSON.stringify(response, null, 2))

  const insights = (text) => {
    return new Promise((resolve, reject) => {
      personalityInsights.profile({text: text, consumption_preferences: false}, (err, res) => {
        (err)
          ? reject(err)
          : resolve(res)
      })
    })
  }

  insights(text)
    .then((data) => {
      res.send(JSON.stringify(data, null, 2))
    })
    .catch((err) => {
      res.status(500).send(err)
    })
})

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})