const express = require('express')
const router = express.Router()
const Contact = require('../models/contacts')

//Getting all
router.get('/', async(req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//Getting one
router.get('/:id', getContact, (req, res) => {
    res.json(res.contact)
})

//Creating one
router.post('/', async (req, res) => {
    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
    })

    try {
        const newContact = await contact.save();
        res.status(201).json(newContact);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
})

//Updating one
router.put('/:id', getContact, async (req, res) => {
    res.contact.name = req.body.name
    res.contact.email = req.body.email

    try {
        const updatedContact = await res.contact.save()
        res.json(updatedContact)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//Deleting one
router.delete('/:id', getContact, async (req, res) => {
    try {
        await res.contact.remove()
        res.json({ message: 'Deleted contact'})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getContact(req, res, next) {
    let contact 
    try {
        contact = await Contact.findById(req.params.id)
        if (contact == null) {
            return res.status(404).json({message: 'Cannot find contact'})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.contact = contact
    next()
}

module.exports = router;