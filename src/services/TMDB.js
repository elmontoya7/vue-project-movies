import axios from 'axios'
import moment from 'moment'

const url = 'https://api.themoviedb.org/3';
const key = 'f15f4d77999ae8ae6e442da37edc70b8';

export default {
  getData (type, queryObj) {
    const query = {
      'api_key': key,
      'sort_by': 'popularity.desc',
      'page': queryObj.page || 1
    }

    return axios.get(url + '/discover/' + type, {params: query});
  }
}
