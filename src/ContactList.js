import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ContactList.css';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const fetchContacts = async () => {
            const response = await axios.get('http://localhost:5000/api/contacts');
            setContacts(response.data);
        };
        fetchContacts();
    }, []);

  const addContact = async () => {
    // Regular expression to check if email ends with "@gmail.com"
    const gmailRegex = /^[\w-\.]+@gmail\.com$/;

    // Check if name or email is empty
    if (!name.trim()) {
        alert('Name cannot be empty!');
        return;
    }

    // Check if email is empty or invalid
    if (!email.trim()) {
        alert('Email cannot be empty!');
        return;
    } else if (!gmailRegex.test(email)) {
        alert('Email must be a valid @gmail.com address!');
        return;
    }

    // If validation passes, proceed to add contact
    try {
        const newContact = { name, email };
        const response = await axios.post('http://localhost:5000/api/contacts', newContact);
        setContacts([...contacts, response.data]);
        setName('');  // Reset the input fields
        setEmail('');
    } catch (error) {
        console.error('Error adding contact:', error);
        alert('Failed to add contact. Please try again.');
    }
};

    const deleteContact = async (id) => {
        await axios.delete(`http://localhost:5000/api/contacts/${id}`);
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    return (
        <div>
            <h1>Contact List</h1>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={addContact}>Add Contact</button>

            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        {contact.name} ({contact.email})
                        <button onClick={() => deleteContact(contact.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;
