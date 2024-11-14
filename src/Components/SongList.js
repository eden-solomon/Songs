// components/SongList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongsStart } from '../Features/songSlice';
import SongItem from './SongItem';

const SongList = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.list);

  useEffect(() => {
    dispatch(fetchSongsStart());
  }, [dispatch]);
  return (
    <div>
      <h2>Song List</h2>
      {songs.map((song) => (
        <SongItem key={song.id} song={song} />
      ))}
    </div>
  );
};

export default SongList;