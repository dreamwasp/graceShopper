const router = require('express').Router()
const {Cart, Slime} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const items = await Cart.findAll({
      where: {
        userId: req.user.id
      }
    })
    res.json(items)
  } catch (err) {
    next(err)
  }
})
