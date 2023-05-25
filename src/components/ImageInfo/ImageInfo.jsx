import axios from 'axios';
async function fetchFunc(queryTitle, per_page, page) {
  try {
    const passwordApi = '34970599-b1e443ef0fe4367990b173d28';

    const param = new URLSearchParams({
      key: passwordApi,
      q: queryTitle,
      orientation: 'horizontal',
      image_type: 'photo',
      safesearch: true,
      per_page: per_page,
      page: page,
    });
    const responce = await axios.get(`https://pixabay.com/api/?${param}`);
    if (!responce.status === 200) {
      throw new Error(responce.status);
    }
    return await responce.data;
  } catch (error) {
    console.log(error);
  }
}

export default fetchFunc;
