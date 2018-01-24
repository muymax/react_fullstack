import axios from 'axios';
const URL = 'http://localhost:3004';


export function artistList(keywords){
    const request = axios.get(`${URL}/artists?q=${keywords}`)
                    .then(response => response.data)
    return {
        type: 'GET_ARTISTS',
        payload: request
    }
}


export function artistListAll(){
    const request = axios.get(`${URL}/artists?_limit=6`)
                    .then(response => response.data)

    return {
        type: 'GET_ARTISTS_ALL',
        payload: request   
    }
}

export function artistDetail(id){
    const request = axios.get(`${URL}/artists?id=${id}`)
                    .then(response => response.data)

    return {
        type: 'GET_ARTISTS_DETAIL',
        payload: request   
    }
}


export function clearArtistDetail(){
    return{
        type:'CLEAR_ARTIST_DETAIL',
        payload:null
    }
}