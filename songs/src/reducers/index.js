import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'The Knock', artist: 'Hop Along' },
        { title: 'Shout', artist: 'Tears for Fears'},
        { title: 'Else', artist: 'Built To Spill'},
        { title: 'Never Meant', artist: 'American Football'},
        { title: "Unbelievers", artist: 'Vampire Weekend'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});