import { log } from 'console';
import {getAuth} from 'firebase/auth'

const FirebaseAuthTokenHelper = async (): Promise<string> => {
  return new Promise<string>((resolve) => {
    getAuth().currentUser!.getIdToken(/* forceRefresh */ true).then(function (idToken) {
      console.log("AUTH TOKEN: " + idToken)
      resolve(String(idToken))
    }).catch(function (error) {
      console.log(error);
      resolve(String(error))
    });
  });
};

export default FirebaseAuthTokenHelper