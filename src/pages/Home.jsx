import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import './index.css';

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

		<div className="container text-center mt-5">
			{store.contacts.map(
				(contactData) =>{
					return(
						<div key={contactData.id} className="contactBorder">

							<div className="mainContact">
								{contactData.name}
							</div>

							
							<Link to= {`/updatecontacts/${contactData.id}`}>
								<div className="d-flex justify-content-end">
									<button 
									type="button" 
									className="editButton btn btn-secondary"> Edit This Contact
									</button>
								</div>
							</Link>

							<div className="d-flex justify-content-end">
								<button
								type="button"
								className="deleteButton btn btn-danger" 
								onClick={()=> deleteContact(contactData.id)}>Delete Contact
								</button>
							</div>

						</div>
					)
				}
			)}

			<div className="mt-4">
				<Link to = "/contacts">
					<button
					type="button" 
					className="btn btn-primary"> Add Contact
					</button>
				</Link>
			</div>

		</div>
	);
}; 