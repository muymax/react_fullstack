// json-server --watch db.json --port 3004
import axios from 'axios';
const URL = `http://localhost:3004`

export function getMessages(){
    const request = axios.get(`${URL}/messages`)
                    .then(response => response.data);
    return {
        type:'GET_MESSAGES',
        payload:request
    }
}


export function addMessage(values,cb){
    const request = axios.post(`${URL}/messages`,values)
                .then(
                    ()=>cb()
                )

        return {
            type:'ADD_MESSAGE',
            payload:'ok'
        }

}