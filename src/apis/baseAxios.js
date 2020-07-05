import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://staging-foodhubv3-092.herokuapp.com',
  headers: {
    'Authorization': 'Basic QWJTbG1EVXNhTGVZNUNIam51V0g2cTloR3RxWExCb3hfclRYeG1lLUdZVFlvYjQzUWE3ZEMzemZ3RzBEM3NrZ290WTFIdHRFWXNrM0ZlcEs6RU1NQWs5NkVTUkxGYXlLS0s1Vzlrd3F3OUJEcTBrdDMtUks2Tl82cG51RHVtc0hQZFZrNnhqNTVnUEJpb2cyQzNNd2xaSjFvOWlWb1I2S2E='
  }
});
axiosInstance.defaults.timeout = 10000;