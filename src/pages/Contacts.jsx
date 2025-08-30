import React, {useState} from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";


export const Contacts = () => {


    const {store, dispatch} =useGlobalReducer()
    const [name, setName] =useState(store.contactInfo.name)
    const [phone, setPhone] =useState(store.contactInfo.phone)
    const [email, setEmail] =useState(store.contactInfo.email)        
    const [address, setAddress] =useState(store.contactInfo.address)


    const createContacts = (creation) =>{
	const options = {
		method: "POST",
		headers: {"content-type":"application/json"},
		body: JSON.stringify({
			"name": creation,
            "phone": creation,
            "email": "email3",
            "address": "address3"
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
                    <input className="form-control" placeholder="Phone Number"/>


                <div className="d-flex mt-5">
                    <label className="form-label">Email</label>
                </div>    
                    <input className="form-control" placeholder="E-Mail"/>


                <div className="d-flex mt-5">
                    <label className="form-label">Address</label>
                </div>
                    <input className="form-control" placeholder="Address"/>


                <div className="mt-4">
                    <button
                    onClick={()=>{
                        createContacts(name.name)
                    }} 
                    type = "button" 
                    className="btn btn-primary me-3">Save Contact</button>
                    <Link to = "/">
                        <button type="button" className="btn btn-primary">Click Here To Go Home</button>
                    </Link>
                </div>

            </div>        
        </div>
    )
};