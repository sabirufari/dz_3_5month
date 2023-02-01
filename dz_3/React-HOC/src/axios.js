import axios from 'axios';

const base = axios.create({
    baseURL: 'https://60f54d102208920017f39ff9.mockapi.io',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default base;