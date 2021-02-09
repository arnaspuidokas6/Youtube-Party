import axios from 'axios';

export const deleteSearchValue = async (searchValueId: string) => {
    const res = await axios.delete(`http://localhost:8080/api/search/${searchValueId}`);
    return res;
};
