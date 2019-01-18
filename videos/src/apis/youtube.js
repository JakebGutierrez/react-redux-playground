import axios from 'axios';

const KEY = 'AIzaSyCy1rQeYLe48Vdar-glyWyYWg5SX8VmalA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
