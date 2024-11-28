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

const getSingleClassroom = (classroomId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/classroom.json?orderBy="firebaseKey"&equalTo="${classroomId}"`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const createClassroom = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/classroom.json`, {
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

const updateClassroom = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/classroom/${payload.firebaseKey}.json`, {
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

export { getClassrooms, getSingleClassroom, createClassroom, updateClassroom };
