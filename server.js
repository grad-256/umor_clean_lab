const express = require('express')
const next = require('next')
const https = require('https')
const fs = require('fs')

const app = next({
  dev: process.env.NODE_ENV !== 'production',
})
const handle = app.getRequestHandler()

const port = parseInt(process.env.PORT || '4300')
const host = '0.0.0.0'
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
;(async () => {
  await app.prepare()
  const expressApp = express()

  expressApp.get('*', (req, res) => handle(req, res))

  // Use HTTPS if HTTPS option enabled
  const hasCertificates =
    fs.readFileSync('./ssl/localhost-key.pem') &&
    fs.readFileSync('./ssl/localhost.pem')
  const useHttps = process.env.HTTPS === 'true' && hasCertificates

  if (useHttps) {
    const options = {
      key: fs.readFileSync('./ssl/localhost-key.pem'),
      cert: fs.readFileSync('./ssl/localhost.pem'),
      agent: new https.Agent({
        rejectUnauthorized: false,
      }),
    }
    const server = https.createServer(options, expressApp)
    server.listen(port, host)
    console.log(`> Ready on https://localhost:${port}`)
  } else {
    expressApp.listen(port, host)
    console.log(`> Ready on http://localhost:${port}`)
  }
})()
