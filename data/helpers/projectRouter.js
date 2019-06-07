const express = require('express')
const db = require('./projectModel')
const router = express.Router()

router.get('/:id', async(req, res) => {
    try {
        const projects = await db.get(req.params.id)
        if(projects) {
            res.status(200).json(projects)
        } else {
            res.status(404).json({
                message: 'The project with the specified ID does not exist'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving the projects'
        })
    }
})

module.exports = router