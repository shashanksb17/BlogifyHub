import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PostDetail.css';

export default function PostDetail() {
  const { Id } = useParams();
  const [postData, setPostData] = useState(null);
  const [tags,setTags]=useState();

  useEffect(() => {
    console.log(Id)
    axios.get(`http://localhost:7000/post/${Id}`)
      .then((response) => {
        console.log(response.data)
        setPostData(response.data);
        let newarr=response.data.tags.split(",")
        setTags(newarr)
        console.log(typeof newarr)
      })
      .catch((error) => console.log('Error fetching post data:'));
  }, [Id]);

 

  return (
    <div className='main'>
        
      <h2>{postData.title}</h2>
      <p>by @{postData.creator}</p>
      <p>{postData.message}</p>
      <div>
        <img src={postData.selectedFile} alt="Post" />
      </div>
      <div>
        {tags.map((e) => {
         return  <span key={e}>{e} </span>
        })}
      </div>
    </div>
  );
}
