import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getStudents = (classroomId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/student.json?orderBy="classroom_id"&equalTo="${classroomId}"`, {
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

export default getStudents;
