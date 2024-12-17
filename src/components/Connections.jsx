import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "./store/connectionSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();
  const fetchConnection = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnection(res?.data?.data));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchConnection();
  }, []);

  if (!connections) return;

  if (connections.length === 0) {
    return (
      <div className="flex justify-center">
        <div className="my-5 bg-base-300 w-1/2">
          <h1 className="text-center m-2 text-white">No Connection Requests</h1>
        </div>
      </div>
    );
  }
  return (
    connections && (
      <div className="flex justify-center ">
        <div className="my-5 w-1/2 bg-base-300">
          <h1 className="text-center m-2 text-white">Connections</h1>
          {connections.map((connection, index) => {
            const { firstName, lastName, about, photoUrl } = connection;
            return (
              <div key={index} className="flex p-5 items-center bg-base-100 m-3">
                <div className="w-3/12 mx-5 ">
                  <img
                    className="w-1/2 rounded-full"
                    alt="photo"
                    src={photoUrl}
                  ></img>
                </div>
                <div className="w-9/12 mx-5">
                  <div>
                    <h1 className="font-bold text-xl my-2">
                      {firstName + " " + lastName}
                    </h1>
                    <p>{about}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
  );
};

export default Connections;
