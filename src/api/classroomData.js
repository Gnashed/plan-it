import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getClassrooms = (teacherId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/classroom.json?orderBy="teacher_id"&equalTo="${teacherId}"`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          resolve(Object.values(data));
        } else {
          resolve([]);
        }
        // console.warn(data);
      })
      .catch(reject);
  });

export default getClassrooms;
