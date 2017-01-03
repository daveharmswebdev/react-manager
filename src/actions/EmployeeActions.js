import firebase from 'firebase';
import {
  EMPLOYEE_UPDATE
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser: { uid } } = firebase.auth();

  console.log(uid);

  firebase.database().ref(`/users/${uid}/employees`)
    .push({ name, phone, shift });
};
