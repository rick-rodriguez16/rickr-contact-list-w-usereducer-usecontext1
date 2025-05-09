import { json } from "react-router-dom";

export const fetchAllContacts = async(dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/rickr`);
    try {
        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        dispatch({
            type: 'fetchedContacts',
            payload: data.contacts,
        });
        return data;
    }
    catch (error){
        console.error("Error getting the agenda.  Check if URL is incorrect or if agenda doesn't exist.", error)
    }
}

export const addContact = async(name, address, phone, email, dispatch) => {
    const newContact = {
        name: name,
        address: address,
        phone: phone,
        email: email,
    }
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newContact)
    }

    const response = await fetch(`https://playground.4geeks.com/contact/agendas/rickr/contacts`, options)
    try {
        if(!response.ok) {
            throw new Error('Error creating new contact.', response.status)
        }
        const data = await response.json();
        dispatch({
            type: 'createdContact',
            payload: newContact,
        })
        return data;
    }
    catch (error){
        console.error('Error posting to the agenda.', error)
    }
}

export const editContact = async(id, name, address, phone, email, dispatch) => {
    const updatedContact = {
        name: name,
        address: address,
        phone: phone,
        email: email,
    }

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: json.stringify(updatedContact)
    }

    const response = await fetch(`https://playground.4geeks.com/contact/agendas/rickr/contacts/${id}`, options);

    try {
        if(!response.ok) {
            throw new Error('Error updating contact.', response.status)
        }
        const data = await response.json();
        dispatch({
            type: 'updatedContact',
            payload: updatedContact,
        })
        return data;
    }
    catch (error) {
        console.error('Error updating contact to the agenda.', error)
    }

}

export const deleteContact = async(id, dispatch) => {
    const options = {
        method: 'DELETE',
    }

    const response = await fetch(`https://playground.4geeks.com/contact/agendas/rickr/contacts/${id}`, options);

    try {
        if(!response.ok) {
            throw new Error('Error deleting contact.', response.status)
        }
        dispatch({
            type: 'deletedContact',
            payload: { id: id },
        })
    }
    catch (error) {
        console.error('Error deleting contact from the agenda.', error)
    }
}
