import React, {useState} from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";


export const UpdateContacts = () => {
    const {store, dispatch} =useGlobalReducer()
    const [name, setName] =useState(store.contactInfo.name)
    const [phone, setPhone] =useState(store.contactInfo.phone)
    const [email, setEmail] =useState(store.contactInfo.email)
    const [address, setAddress] =useState(store.contactInfo.address)
    

const updateContact =(updated) => {
		const options = {
			method: "PUT",
			headers: {"content-type":"application/json"},
			body: JSON.stringify({
				"name": updated,
				"phone": updated,
				"email": updated,
				"address": updated,
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

			<input 
            onChange={(e)=>setEmail(e.target.value)}
            value = {email}
            placeholder="E-Mail" />

			<input 
            onChange={(e)=>setAddress(e.target.value)}
            value = {address}
            placeholder="Address" />

			<Link to="/">Click Here To Go Home</Link>

			<button
			onClick={()=>{
				updateContact(store.contactInfo)
			}}
			type="button" 
			className="btn btn-primary">Save Test</button>

        </div>
    )
};