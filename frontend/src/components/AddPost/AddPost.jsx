import axios from 'axios';
import React, { useState } from 'react';
import './AddPost.css';

export default function AddPost() {
  const [formData, setFormData] = useState({});
  const [tagData, setTagData] = useState();

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleChange1 = (event) => {
    const { value } = event.target;
    let arr = value.split(',');
    setTagData(arr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({ ...formData, tags: tagData });

    axios
      .post('http://localhost:6000/post', formData)
      .then((res) => {
        console.log(res.data);
        alert('Post Added Successfully');
      });
  };

  return (
    <div className="add-post-container">
      <form className="add-post-form">
        <label>Title:</label>
        <input type="text" id="title" onChange={handleChange} />
        <br />
        <label>Message:</label>
        <input type="text" id="message" onChange={handleChange} />
        <br />
        <label>Creator:</label>
        <input type="text" id="creator" onChange={handleChange} />
        <br />
        <label>Tags:</label>
        <input type="text" id="tags" onChange={handleChange1} />
        <br />
        <label>Image Link:</label>
        <input type="text" id="selectedFile" onChange={handleChange} />

        <button onClick={handleSubmit} type="submit">
          Post
        </button>
      </form>
    </div>
  );
}
