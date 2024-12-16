/* eslint-disable react/prop-types */
import React from "react";

const UserCard = ({ card }) => {
  const { firstName, lastName, about, photoUrl } = card;
  return (
    <div className="flex justify-center m-5">
      <div className="card bg-base-300 w-96 shadow-xl justify-center">
        <figure>
          <img className="w-6/12" src={photoUrl} alt="Photo" />
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
    </div>
  );
};

export default UserCard;
