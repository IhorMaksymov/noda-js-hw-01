const { v4: uuidv4 } = require("uuid");

const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.resolve('./db/contacts.json');


async function listContacts() {
    try {
        const contactList = await fs.readFile(contactsPath, 'utf8');
        return JSON_parse = JSON.parse(contactList);
    } catch (error) {
        console.log(error);
    }
}

async function getContactById(contactId) {
    const getContact = await listContacts();
    return contactById = getContact.find((contact) => contact.id === contactId);
}

async function removeContact(contactId) {
    const contactsList = await listContacts();
    const newContactsList = contactsList.filter((contact) => contact.id !== contactId);
    await fs.writeFile(contactsPath, JSON.stringify(newContactsList));
    return newContactsList;
}

async function addContact(name, email, phone) {
    const contactsList = await listContacts();
    const id = uuidv4();
    const contact = { id, name, email, phone };
    contactsList.push(contact);
    await fs.writeFile(contactsPath, JSON.stringify(contactsList));
    return contact;
}



module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
};