import React, { useEffect } from "react";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

import Feed from "../../components/feed/Feed";
import { useState  } from "react";
import axios from "axios";
import { useParams } from "react-router";

import "./profile.css";

export default function  Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER; 
  const [user, setUser] = useState({});
  const username = useParams().username;


  useEffect(()=>{
    const fetchUser = async()=>{
      const res= await axios.get(`/users?username=${username}`)
      setUser(res.data)
    };
    fetchUser();
  },[username])

  
  return (
    <>
      <Topbar />

      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={`${PF}post/3.jpeg`}
                alt=""
                srcset=""
              />
              <img
                className="profileUserImg"
                src={`${PF}post/7.jpeg`}
                alt=""
                srcset=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName"> {user.username}</h4>
                <span className="profileInfoDesc"> {user.descs}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username}/>
            <Rightbar user={user}/>
          </div>
        </div>
      </div>
    </>
  );
}
