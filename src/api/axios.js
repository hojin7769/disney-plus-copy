import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params:{
        api_key : "da292fbfa55a2350af189548bf10a119",
        language : 'ko-KR'
    }
})

export default instance;