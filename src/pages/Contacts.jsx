import React, {useState} from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import './index.css';


export const Contacts = () => {


    const {store, dispatch} =useGlobalReducer()
    const [name, setName] =useState(store.contactInfo.name)
    const [phone, setPhone] =useState(store.contactInfo.phone)
    const [email, setEmail] =useState(store.contactInfo.email)        
    const [address, setAddress] =useState(store.contactInfo.address)


    const createContacts = () =>{
	const options = {
		method: "POST",
		headers: {"content-type":"application/json"},
		body: JSON.stringify({
			"name": name,
            "phone": phone,
            "email": email,
            "address": address
		})
	}
	fetch(store.baseUrl +"agendas/Kalebklw/contacts", options)
	.then((resp) => resp.json())
	.then((data) => console.log("Data of Contacts: ", data))
};




    return(
        <div className="text-center">
            <h1>Add New Contact</h1>

            <div className="container">

                <div className="d-flex mt-3">
                    <label className="form-label">Full Name</label>
                </div>
                    <input 
                    value={name}
                    className="form-control"
                    placeholder="Contact Name"
                    onChange={(e)=>setName(e.target.value)}/>


                <div className="d-flex mt-5">
                    <label className="form-label">Phone Number</label>
                </div>
                    <input
                    value={phone}
                    className="form-control" 
                    placeholder="Phone Number"
                    onChange={(e)=>setPhone(e.target.value)}/>


                <div className="d-flex mt-5">
                    <label className="form-label">Email</label>
                </div>    
                    <input value = {email} className="form-control" placeholder="E-Mail" onChange={(e)=>setEmail(e.target.value)}/>


                <div className="d-flex mt-5">
                    <label className="form-label">Address</label>
                </div>
                    <input value= {address} className="form-control" placeholder="Address" onChange={(e)=>setAddress(e.target.value)}/>


                <div className="mt-4">
                    <button
                    onClick={()=>{
                        createContacts()
                    }} 
                    type = "button" 
                    className="btn btn-success me-3">Save Contact</button>
                    <Link to = "/">
                        <button type="button" className="btn btn-primary">Click Here To Go Home</button>
                    </Link>
                </div>

            </div>        
        </div>
    )
};