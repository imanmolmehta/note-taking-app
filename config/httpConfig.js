import axios from 'axios';

export const http = axios.create({
    baseURL: 'http://54a6-14-102-160-86.ngrok.io/'
});