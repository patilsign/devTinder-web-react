import { useEffect } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "./store/feedSlice";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const fetchFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchFeed();
  }, []);

  if (!feed) return;

  if (feed.length === 0) {
    return (
      <div className="flex justify-center">
        <div className="my-5 bg-base-300 w-1/2">
          <h1 className="text-center m-2 text-white">No Feeds More....</h1>
        </div>
      </div>
    );
  }
  return (
    feed && (
      <div className="justify-center flex my-5">
        <UserCard card={feed[0]} />
      </div>
    )
  );
};

export default Feed;
