import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID f9bb3ca0fbbbe768abd15205bdb861683bb08919a36684ffd174562ad3caf57f'
    }
});