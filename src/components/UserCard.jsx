/* eslint-disable react/prop-types */
import { removeFeed } from "./store/feedSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";

const UserCard = ({ card }) => {
  const { _id, firstName, lastName, about, photoUrl } = card;
  const dispatch = useDispatch();
  const reviewFeed = async (status, userId) => {
    const res = await axios.post(
      BASE_URL + "/sendConnectionRequest/" + status + "/" + userId,
      {},
      { withCredentials: true }
    );
    dispatch(removeFeed(userId));
  };
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
            <button
              className="btn btn-primary"
              onClick={() => reviewFeed("ignored", _id)}
            >
              Ignore
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => reviewFeed("interested", _id)}
            >
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
