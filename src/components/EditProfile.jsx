import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "./store/userSlice";

const EditProfile = ({ user }) => {
  const [toastMsg, setToastMsg] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [about, setAbout] = useState(user.about);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const dispatch = useDispatch();

  const saveProfile = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, about, photoUrl },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      setToastMsg(true);
      setTimeout(() => {
        setToastMsg(false);
      }, 3000);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <div className="flex justify-center bg-base-200 my-5">
      <div className="flex justify-center m-5">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">First Name</span>
          </div>
          <input
            type="text"
            value={firstName}
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <div className="label">
            <span className="label-text">Last Name</span>
          </div>
          <input
            type="text"
            value={lastName}
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setLastName(e.target.value)}
          />
          <div className="label">
            <span className="label-text">PhotoUrl</span>
          </div>
          <input
            type="text"
            value={photoUrl}
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setPhotoUrl(e.target.value)}
          />
          <div className="label">
            <span className="label-text">About</span>
          </div>
          <input
            type="text"
            value={about}
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setAbout(e.target.value)}
          />
          <p className="text-red-400 my-1">{}</p>
          <button
            className="btn btn-outline form-control my-4"
            onClick={saveProfile}
          >
            Save Profile
          </button>
        </label>
      </div>
      <UserCard card={{ firstName, lastName, about, photoUrl }} />
      {toastMsg && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-info">
            <span>User Data Updated Successfully</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
