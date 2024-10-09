const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Load contacts from JSON file
const loadContacts = () => {
    try {
        const data = fs.readFileSync('contacts.json', 'utf-8');
        return JSON.parse(data || '[]');
    } catch (error) {
        console.error('Error loading contacts:', error);
        return [];
    }
};

// Save contacts to JSON file
const saveContacts = (contacts) => {
    try {
        fs.writeFileSync('contacts.json', JSON.stringify(contacts, null, 2));
    } catch (error) {
        console.error('Error saving contacts:', error);
    }
};

// Get all contacts
app.get('/api/contacts', (req, res) => {
    try {
        const contacts = loadContacts();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Failed to load contacts.' });
    }
});

// Add a new contact
app.post('/api/contacts', (req, res) => {
    try {
        const contacts = loadContacts();
        const newContact = { id: Date.now(), ...req.body };
        contacts.push(newContact);
        saveContacts(contacts);
        res.status(201).json(newContact);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add contact.' });
    }
});

// Delete a contact
app.delete('/api/contacts/:id', (req, res) => {
    try {
        const contacts = loadContacts();
        const updatedContacts = contacts.filter(contact => contact.id !== parseInt(req.params.id));
        saveContacts(updatedContacts);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete contact.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
