import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8b6YmyYqzXZGTuVTH0-Mk1gCUdYQwaco5WpO2HzWXZ8'
    }
});