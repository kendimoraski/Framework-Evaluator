const router = require('express').Router()
const Searches = require('./searches')

// GET
router.get('/searches', async (req, res, next) => {
  try {
    console.log('we got into the get route')
    const searches = await Searches.findAll({
      attributes: ['id', 'library', 'framework', 'searchCount'],
    })
    res.json(searches)
  } catch (err) {
    console.error('err in router.get', err)
    next(err)
  }
})

// POST
router.post('/searches', async (req, res, next) => {
  try {
    console.log('we got into the post route')
    const { library, framework } = req.body
    // query the database
    console.log('Searches', Searches)
    const existingSearch = await Searches.findOne({
      where: {
        library,
        framework,
      },
    })
    // Check if the requesting search already exists in our database
    if (existingSearch) {
      await existingSearch.increment('searchCount')
      await existingSearch.save()
    } else {
      // Else, it doesn't exist, so we need add this new search to the database
      await Searches.create({ library, framework })
    }
    res.set('Content-Type', 'text/html')
    // res.status(200).send('some text')
  } catch (err) {
    console.error('err in router.post', err)
    next(err)
  }
})

module.exports = router
