import React, {useState} from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


export const UpdateContacts = () => {
	const {id} = useParams()
    const {store, dispatch} =useGlobalReducer()
    const [name, setName] =useState('')
    const [phone, setPhone] =useState('')
    const [email, setEmail] =useState('')
    const [address, setAddress] =useState('')
	useEffect(
		()=>{
			const foundContact = store.contacts.find((contact) => contact.id===parseInt(id))
			setName(foundContact.name)
			setPhone(foundContact.phone)
			setAddress(foundContact.address)
			setEmail(foundContact.email)
		},[]
	)
    

const updateContact =() => {
		const options = {
			method: "PUT",
			headers: {"content-type":"application/json"},
			body: JSON.stringify({
				"name": name,
				"phone": phone,
				"email": email,
				"address": address,
				id: 0
			})
		}
		fetch(store.baseUrl + `agendas/Kalebklw/contacts/${id}`, options)
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
				updateContact()
			}}
			type="button" 
			className="btn btn-primary">Save Test</button>

        </div>
    )
};