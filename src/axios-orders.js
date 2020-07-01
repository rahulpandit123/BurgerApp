import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://react-my-project-e33df.firebaseio.com/'
})

export default instance;

