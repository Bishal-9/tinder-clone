import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://bishal9-tinderbackend.herokuapp.com/'
})

export default instance