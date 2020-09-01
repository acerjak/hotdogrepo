//define router
const router = require('express').Router()
const path = require('path')

//serving all routes
router.use('/api', require('./mainRoutes.js'))

//need to serve HTML from server
router.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router
