import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

export const Home = () => {

const [user, setUser] = useState("Kaleb") 

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
  }
  
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
}

	useEffect(
		() =>{
			createAgenda()
		}, []
	)

	return (

		<div className="text-center mt-5">
			<h1>Hello!!</h1>
			{user}
			<Link to = "/test">
			Go To Test Page
			</Link>

			<button onClick={()=> {
				createContacts()
			}}>
				Click to Add Contact
			</button>

			<div className="m-3">
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
			</div>

		</div>
	);
}; 