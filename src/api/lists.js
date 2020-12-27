import axios from 'axios';

export const getLists = async() =>{
    const response = await axios.get('http://localhost:4000/lists')
    return response.data
    
}
export const getListById = async( id ) =>{
    const response = await axios.get(`http://localhost:4000/lists/${id}`)
    return response.data
}