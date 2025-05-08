import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../components/ContactCard";
import useGlobalReducer from "../hooks/useGlobalReducer";

import { deleteContact, fetchAllContacts } from "../lib/fetch";

export const Contact = () => {
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        fetchAllContacts(dispatch);
    }, [])
    
    return (
        <div className="container">
            {
                !store && !store.contacts
                ?
                <h1>Loading...</h1>
                :
                store.contacts.map(contact => {
                    return (
                        <div className='card d-inline-flex flex-row' key={contact.id}>
                            <ContactCard 
                                name={contact.name}
                                address={contact.address}
                                phone={contact.phone}
                                email={contact.email}
                            />
                            <button 
                                className='btn btn-outline-dark btn-edit contact-button'
                                onClick={() => {}}
                            >
                            Edit
                            </button>
                            <button 
                                className='btn btn-outline-dark btn-del contact-button'
                                onClick={() => deleteContact(contact.id, dispatch)}
                            >
                            Del
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

