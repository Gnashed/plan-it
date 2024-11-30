import { getStudentsByClassroomId, deleteSingleStudent } from './studentData';
import { deleteClassroom } from './classroomData';

const deleteClassroomStudentRelationship = (firebaseKey) =>
  new Promise((resolve, reject) => {
    getStudentsByClassroomId(firebaseKey)
      .then((studentsArray) => {
        const deleteStudentsPromise = studentsArray.map((student) => deleteSingleStudent(student.firebaseKey));

        Promise.all(deleteStudentsPromise).then(() => {
          deleteClassroom(firebaseKey).then(resolve);
        });
      })
      .catch(reject);
  });

export default deleteClassroomStudentRelationship;
