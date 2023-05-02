import { MoreVert } from '@material-ui/icons'
import './post.css'
// import { Users } from '../../dummyData'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import {format} from "timeago.js";
import { Link } from 'react-router-dom';  

export default function Post({post}) {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER; 
    const [user, setUser]= useState({});
    console.log(user,"user?")



  useEffect(()=>{
    const fetchUser = async()=>{      
    const res = await axios.get(`/users?userId=${post.userId}`)
    console.log(res, "response:");
    setUser(res.data)
  };
  fetchUser(); 
}
  ,
  
  [post.userId])
     

    const likeHandler =()=>{
        setLike(isLiked ? like-1: like+1)
        setIsLiked(!isLiked)
    }
  return (
    <div className='post'>
        <div className='postWrapper'>
            <div className='postTop'>
                <div className="postTopLeft">
                    <Link to= {`profile/${user.username}`}>
                    <img className="postProfileImg" src={user.profilePicture || PF+"person/noProfilepicture.png"}  />
                    </Link>
                    
                    <span className='postUserName' >{user.username || PF+"person/noCoverpage.png"}</span>
                    <span className='postDate'>{format(post.createdAt)}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert /> 

                </div>


            </div>
            <div className="postCenter">
                <span className='postText'>{post?.desc}</span> 
                <img className='postImg' src={PF+post.img}  />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                        <img className= "likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt=""  />
                        <img className="likeIcon" src={`${PF}heart.png`} onClick={likeHandler} alt="" />
                        <span className='postLikeCounter'>{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText"  >{post.comment} comments</span>

                </div>
            </div>
        

        </div>

    </div>
  )
}
