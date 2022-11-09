const express = require('express')

const db = require('../db')

const router = express.Router()

module.exports = router

// GET /api/v1/fruits
router.get('/', async (req, res) => {
  try {
    const fruits = await db.getFruits()
    res.json(fruits)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'unable to fetch fruits' })
  }
})
