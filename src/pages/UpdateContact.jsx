import React, {useState} from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const UpdateContacts = () => {
    const {store, dispatch} =useGlobalReducer()
    const [name, setName] =useState(store.contactInfo.name)
    const [phone, setPhone] =useState(store.contactInfo.phone)
    
    const createContacts = () =>{
	const options = {
		method: "POST",
		headers: {"content-type":"application/json"},
		body: JSON.stringify({
			"name": "user3",
            "phone": "phone3",
            "email": "email3",
            "address": "address3"
		})
	}
	fetch(store.baseUrl +"agendas/Kalebklw/contacts", options)
	.then((resp) => resp.json())
	.then((data) => console.log("Data of Contacts: ", data))
};

const updateContact =() => {
		const options = {
			method: "PUT",
			headers: {"content-type":"application/json"},
			body: JSON.stringify({
				"name": "user5",
				"phone": "phone5",
				"email": "email5",
				"address": "address5",
				id: 0
			})
		}
		fetch(store.baseUrl + "agendas/Kalebklw/contacts/37", options)
		.fetch((resp) => resp.json())
		.fetch((data) =>console.log("Updated Contact Data Tag: ", data))
	};

    
    return(
        <div>
            <input
            onChange={(e)=>setName(e.target.value)} 
            value = {name}
            placeholder="Full Name"/>
            <input 
            onChange={(e)=>setPhone(e.target.value)}
            value = {phone}
            placeholder="Phone Number" />
        </div>
    )
};