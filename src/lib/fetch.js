
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
        email: email
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
        console.log("Success with post")
        const data = await response.json();
        console.log(data)
        return data;
    }
    catch (error){
        console.error('Error posting to the agenda.', error)
    }
}

export const editContact = async(id, name, address, phone, email, dispatch) => {

}

export const deleteConcact = async(id, dispatch) => {

}
