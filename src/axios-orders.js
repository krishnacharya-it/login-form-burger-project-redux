import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-6f2f1.firebaseio.com/'
});

export default instance;
