import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getGrades = (firebaseKey) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/grades.json?orderBy="classroom_id"&equalTo="${firebaseKey}"`, {
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

// eslint-disable-next-line import/prefer-default-export
export { getGrades };
