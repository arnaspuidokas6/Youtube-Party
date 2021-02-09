import axios from 'axios';

export const fetchSearchValues = async () => {
    const res = await axios.get(`http://localhost:8080/api/search`);
    console.log(res);
    return res;
};
