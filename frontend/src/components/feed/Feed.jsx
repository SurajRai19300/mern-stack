
import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
// import { Posts } from "../../dummyData";
import axios from "axios";


export default function  Feed({username}) {
  const [posts, setPosts] = useState([]);


  useEffect(()=>{
    const fetchPost = async()=>{    
      const res = username ? await axios.get("/posts/profile" + username) : await axios.get("posts/timeline/642e67afecc510a6b84f5de5");
      
      setPosts(res.data);
    
  };
  fetchPost(); 
} 
  ,
  
  [username])

  return (
    <>
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p)=>(

          <Post key={p._id} post={p}/>
        ))}


        
      </div>


    </div>
    
    </>
  )
    // <div className="feed">
    //   <div className="feedWrapper">
        
       
    //   </div>
    // </div>
  
}
