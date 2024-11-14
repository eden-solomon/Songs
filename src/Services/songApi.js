import axios from 'axios';

const API_URL = 'http://localhost:5000/songs';

export const fetchSongs = () => axios.get(API_URL).then(res => res.data);
export const addSong = (song) => axios.post(API_URL, song).then(res => res.data);
export const updateSong = (song) => axios.put(`${API_URL}/${song.id}`, song).then(res => res.data);
export const deleteSong = (id) => axios.delete(`${API_URL}/${id}`).then(res => res.data);