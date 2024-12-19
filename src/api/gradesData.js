import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const createGrade = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/grades.json`, {
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

const updateGrade = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/grades/${payload.firebaseKey}.json`, {
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

const deleteGrade = (gradeId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/grades/${gradeId}.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json)
      .then((data) => resolve(data))
      .catch(reject);
  });

export { createGrade, getGrades, updateGrade, deleteGrade };
