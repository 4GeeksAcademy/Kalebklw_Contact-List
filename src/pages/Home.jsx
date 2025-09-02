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

	const deleteContact = (id) => {
		const options = {
			method: "DELETE",
			headers: {"content-type":"application/json"},
		}
		fetch(store.baseUrl + `agendas/Kalebklw/contacts/${id}`, options)
		.then(receiveContacts())
	};

	const receiveContacts = () => {
		fetch(store.baseUrl + "agendas/Kalebklw/contacts")
		.then((resp) => resp.json())
		.then((data) => dispatch({payload: data.contacts, type:"set-contacts"}))
	}

	useEffect(
		() =>{
			createAgenda()
			receiveContacts()
		}, []
	);

	return (

		<div className="text-center mt-5">
			{store.contacts.map(
				(contactData) =>{
					return(
						<div key={contactData.id}>
							<Link to= {`/updatecontacts/${contactData.id}`}>
								<button> Edit This Contact</button>
							</Link>
							{contactData.name}
							<button onClick={()=> deleteContact(contactData.id)}>Delete Contact</button>
						</div>
					)
				}
			)}
			{/* <Link to = "/test">
			Go To Test Page
			</Link> */}
			<Link to = "/contacts">
				<button
				type="button" 
				className="btn btn-primary"> Add Contact
				</button>
			</Link>

			

			{/* <button onClick={()=> {
				updateContact()
			}}>
				Update Contact
			</button> */}
			

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