import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "./store/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);
  const fetchRequests = async () => {
    const res = await axios.get(BASE_URL + "/user/request/received", {
      withCredentials: true,
    });
    dispatch(addRequests(res?.data?.data));
  };
  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;

  if (requests.length === 0) {
    return (
      <div className="flex justify-center">
        <div className="my-5 bg-base-300 w-1/2">
          <h1 className="text-center m-2 text-white">No Requests</h1>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center text-center">
      <div className="my-5 bg-base-300 w-1/2">
        <h1 className="text-center m-2 text-white font-bold text-xl">
          Requests
        </h1>

        {requests.map((request) => {
          const { _id, firstName, lastName, photoUrl, about } =
            request.fromUserId;

          return (
            <div key={_id} className="justify-center m-5 bg-base-200">
              <div className="m-5 text-center items-center">
                <img
                  className="w-[100px] rounded-full m-auto"
                  alt="photo"
                  src={photoUrl}
                ></img>
              </div>
              <div>
                <h2>{firstName + " " + lastName}</h2>
                <p>{about}</p>
              </div>
              <div>
                <button className="btn btn-active btn-primary m-2">
                  Accept
                </button>
                <button className="btn btn-active btn-secondary m-2">
                  Reject
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Requests;
