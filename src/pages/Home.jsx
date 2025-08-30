import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

export const Home = () => {

const [user, setUser] = useState("Kaleb"); 
const [contacts, setContacts] = useState([]);

  const {store, dispatch} =useGlobalReducer()
  const createAgenda = () =>{
	let options = {
		method: "POST",
		headers: {"content-type":"application/json"},
		body: JSON.stringify({
			"slug": "Kalebklw",
  			"id": 0
		})
	}
	fetch(store.baseUrl + "agendas/Kalebklw", options)
	.then((resp) => resp.json())
	.then((data) =>{ 
		setUser(data.detail)
		console.log("Tag For Agenda's Data: ", data)})
  };

	const deleteContact = () => {
		const options = {
			method: "DELETE",
			headers: {"content-type":"application/json"},
		}
		fetch(store.baseUrl + "agendas/Kalebklw/contacts/", options)
		.then((resp) => resp.json())
		.then((data) => console.log("Deleted Contacts Data Tag: ", data))
	};

	const receiveContacts = () => {
		fetch(store.baseUrl + "agendas/Kalebklw/contacts")
		.then((resp) => resp.json())
		.then((data) => setContacts(data.contacts))
	}

	useEffect(
		() =>{
			createAgenda()
			receiveContacts()
		}, []
	);

	return (

		<div className="text-center mt-5">
			{contacts.map(
				(contactData) =>{
					return(
						<div>
							<Link to= "/updatecontacts">
								<button onClick={()=>{
									dispatch({
										type: "set-contactInfo",
										payload: contactData
									})
								}}> Edit This Contact</button>
							</Link>
							{contactData.name}
						</div>
					)
				}
			)}
			{/* <Link to = "/test">
			Go To Test Page
			</Link> */}
			<Link to = "/contacts">
			Click Here To Add Contacts
			</Link>

			

			<button onClick={()=> {
				updateContact()
			}}>
				Update Contact
			</button>
			

			{/* <div className="m-3">
				<button onClick={() => {
					dispatch({
						type: "set-fName", 
						payload: "Alex"
					})
				}}> {store.fName} </button>
			</div>

			<div>
				<button onClick={() => {
					dispatch({
						type: "set-lName",
						payload: "Ayala"
					})
				}}> {store.lName} </button>
			</div> */}

		</div>
	);
}; 