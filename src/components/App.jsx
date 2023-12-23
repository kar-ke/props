import React from "react";
import Card from "./Card";
import contacts from "../contect";
function card(obj){
    return (
		<Card
			name={obj.name}
			imgURL={obj.imgURL}
			phone={obj.phone}
			email={obj.email}
		/>
	);
}
function App(){

     
    return (
        <div >
        <h1 className="heading">My Contacts</h1>
       {contacts.map((obj)=>card(obj))}
        </div>
    )
}
export default App;