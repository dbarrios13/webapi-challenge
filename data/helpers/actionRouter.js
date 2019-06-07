const express = require('express')
const db = require('./actionModel')
const router = express.Router()

router.get('/:id', async (req, res) => {
    try {
        const action = await db.get(req.params.id)
        if(action) {
            res.status(200).json(action)
        } else {
            res.status(404).json({
                message: 'The action with the specified ID does not exist'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving actions'
        })
    }
})

module.exports = router