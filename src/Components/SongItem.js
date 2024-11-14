// components/SongItem.js
/** @jsxImportSource @emotion/react */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteSongSuccess } from '../Features/songSlice';
import styled from '@emotion/styled';

const SongItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 8px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 6px 12px;
  margin-left: 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SongItem = ({ song }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteSongSuccess(song.id));
  };

  return (
    <SongItemContainer>
      <div>
        <h3>{song.title}</h3>
        <p>{song.artist}</p>
      </div>
      <div>
        <Button onClick={() => alert('Edit functionality here')}>Edit</Button>
        <Button onClick={handleDelete} style={{ backgroundColor: '#dc3545' }}>Delete</Button>
      </div>
    </SongItemContainer>
  );
};

export default SongItem;