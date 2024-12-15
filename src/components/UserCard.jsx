/* eslint-disable react/prop-types */
import React from "react";

const UserCard = ({ card }) => {
  console.log(card, "1111111122222222 feeed");
  const { firstName, lastName, about, photoUrl } =  card ;
  return (
    <div className="card bg-base-300 w-96 shadow-xl justify-center">
      <figure>
        <img src={photoUrl} alt="Photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{about}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
