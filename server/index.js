const express = require("express"),
    app = express(),
    PORT = 8080,
    config = require("../config/dev.config"),
    compiler = require('webpack')(config),
    history = require("connect-history-api-fallback")

app.use(history())
app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: 'minimal'
}))

app.use(require('webpack-hot-middleware')(compiler))

app.listen(PORT, () => {
    console.log(`Server listening port ${PORT}`)
})