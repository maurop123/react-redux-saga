import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addVideo } from '../store/actions/videosAction';

export default function AddVideoPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    artist: '',
    title: '',
    videoId: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.debug(formData);
  };

  const handleSubmit = (e) => {
    const { artist, title, videoId } = formData;
    if (!artist || !title || !videoId)
      alert('Error: Please fill all form fields');
    else {
      dispatch(addVideo(formData));
      navigate('/');
    }
  };

  return (
    <>
      <Link to="/" className="absolute left-3 mb-5">
        &lt; Home
      </Link>
      <h1>Add Video</h1>
      <div className="flex flex-col h-full items-center justify-center">
        <input
          type="text"
          className="outline rounded-md mb-5 text-white pl-2 pb-0.5 h-11 text-2xl"
          placeholder="Artist Name"
          value={formData.artist}
          name="artist"
          onChange={handleChange}
        />
        <input
          type="text"
          className="outline rounded-md mb-5 text-white pl-2 pb-0.5 h-11 text-2xl"
          placeholder="Song Name"
          value={formData.title}
          name="title"
          onChange={handleChange}
        />
        <input
          type="text"
          className="outline rounded-md mb-5 text-white pl-2 pb-0.5 h-11 text-2xl"
          placeholder="YouTube Video Id"
          value={formData.videoId}
          name="videoId"
          onChange={handleChange}
        />
        <button className="outline" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </>
  );
}
