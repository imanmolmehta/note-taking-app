import axios from 'axios';

export const http = axios.create({
    baseURL: 'http://c361-14-102-160-86.ngrok.io'
});