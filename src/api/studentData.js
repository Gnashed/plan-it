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

const getSingleStudent = (firebaseKey) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/student/${firebaseKey}.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          resolve(data);
        } else {
          resolve([]);
        }
        // console.warn(data);
      })
      .catch(reject);
  });

const createStudent = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/student.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const updateStudent = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/student/${payload.firebaseKey}.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then(resolve)
      .catch(reject);
  });

export { getStudents, getSingleStudent, createStudent, updateStudent };
