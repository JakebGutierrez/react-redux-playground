import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID 94543a8b91449002660b293ba0bb7a1deaaa87023bf4be602618416b297d8070'
    }
});