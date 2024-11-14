// components/SongForm.js
/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';

const FormContainer = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #28a745;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SongForm = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSong = { id: Date.now(), title, artist };
    dispatch({ type: 'songs/addSong', payload: newSong });
    setTitle('');
    setArtist('');
  };

  return (
    <FormContainer>
      <h2>Add a New Song</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Song Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          required
        />
        <Button type="submit">Add Song</Button>
      </form>
    </FormContainer>
  );
};

export default SongForm;