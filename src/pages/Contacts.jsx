import React from "react";



export const Contacts = () => {
    return(
        <div className="text-center">
            <h1>Add New Contact</h1>

            <label className="form-label" placeholder="test">Full Name</label>
            <input className="form-control"/>

            <label className="form-label" placeholder="test">Phone Number</label>
            <input className="form-control"/>

            <label className="form-label" placeholder="test">Email</label>
            <input className="form-control"/>

            <label className="form-label" placeholder="test">Address</label>
            <input className="form-control"/>           
        </div>
    )
};