import React from "react";
import "./Card.css";
import { users } from "../utilis/users";

const Card = () => {
    return (
    <div className="card">
      {users.map((user) => (
        <div className="item" key={user.id}>
            <img src={user.poza} className="image"/>
            <div className="text">
                <p className="name">{user.nume + " " + user.prenume}</p>
                <p className="age">Varsta: {user.varsta}</p>
                <p className="time">Timp petrecut in EESTEC: {user.timpPetrecut} ani</p>
                {user.isVerified ? <p className="verified">This user is verified</p> : <p className="not-verified">This user is an impstor</p>}
            </div>
        </div>
      ))}
    </div>
  );
}

export default Card;

