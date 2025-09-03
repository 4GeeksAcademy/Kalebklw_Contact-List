import React, {useState} from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import './index.css';


export const UpdateContacts = () => {
	const {id} = useParams()
    const {store, dispatch} =useGlobalReducer()
    const [name, setName] =useState()
    const [phone, setPhone] =useState()
    const [email, setEmail] =useState()
    const [address, setAddress] =useState()

	useEffect(
		()=>{
			const foundContact = store.contacts.find((contact) => contact.id===parseInt(id));
			if (foundContact) {

				setName(foundContact.name)
				setPhone(foundContact.phone)
				setAddress(foundContact.address)
				setEmail(foundContact.email)
			}
		},[id, store.contacts]
	);
    

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
        <div className="text-center">
			<h1>Edit Contact</h1>

			<div className="container">

				<div className="d-flex mt-3">
					<label className="form-label"> Full Name</label>
				</div>
					<input
					onChange={(e)=>setName(e.target.value)}
					className="form-control"
					value = {name}
					placeholder="Full Name"/>

				<div>
					<label className="d-flex mt-3">Phone Number</label>
				</div>
					<input 
					onChange={(e)=>setPhone(e.target.value)}
					className="form-control"
					value = {phone}
					placeholder="Phone Number" />

				<div>
					<label className="d-flex mt-3">E-Mail</label>
				</div>
					<input 
					onChange={(e)=>setEmail(e.target.value)}
					className="form-control"
					value = {email}
					placeholder="E-Mail" />

				<div>
					<label className="d-flex mt-3">Address</label>
				</div>
					<input 
					onChange={(e)=>setAddress(e.target.value)}
					className="form-control"
					value = {address}
					placeholder="Address" />
			</div>


			<button
				onClick={()=>{
					updateContact()
				}}
				type="button" 
				className="btn btn-success">Save Changes
			</button>

				<Link to="/">
					<button 
					type="button" 
					className="btn btn-primary">
						Return To Contacts
					</button>
				</Link>

        </div>
    );
};