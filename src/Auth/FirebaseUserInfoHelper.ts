import { log } from 'console';
import {getAuth} from '@firebase/auth';

export default async function FirebaseAuthTokenHelper() {
  await getAuth().currentUser!.getIdToken(/* forceRefresh */ true).then(function (idToken) {
    return idToken;
  }).catch(function (error) {
    console.log(error);
    return null;
  });
}
