import { getAuth } from 'firebase/auth';
import FirebaseAuthTokenHelper from '../../Auth/FirebaseUserInfoHelper';

const GetHeaderHelper = async (): Promise<{
  "Content-type": string;
  Authorization: any;
}> => {
  const userToken = await FirebaseAuthTokenHelper();
  return {
    "Content-type": "application/json",
    "Authorization": "Bearer " + userToken,
  }
}

export default GetHeaderHelper;