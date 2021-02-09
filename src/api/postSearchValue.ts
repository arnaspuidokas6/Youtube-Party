import axios from 'axios';

interface IPostSearch {
    searchValue: string;
}

export const postSearchValues = async ({ searchValue }: IPostSearch) =>
    await axios.post(`http://localhost:8080/api/search`, { searchValue });
