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

router.post('/', async (req, res) => {
    try {
        const project = await db.insert(req.body)
        if(project) {
            res.status(201).json(project)
        } else {
            res.status(400).json({
                message: 'Please provide name and description of the project'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error adding the project'
        })
    }
})

module.exports = router