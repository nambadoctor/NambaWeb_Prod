import { getAuth } from 'firebase/auth';
import { useSelector } from 'react-redux';
import FirebaseAuthTokenHelper from '../../Auth/FirebaseUserInfoHelper';
import { RootStore } from '../../store';

const GetHeaderHelper = async (): Promise<{
  "Content-type": string;
  Authorization: string;
}> => {
  const userToken = await FirebaseAuthTokenHelper();

  return {
    "Content-type": "application/json",
    "Authorization": "Bearer " + userToken //userState.authToken,
  }
}

export default GetHeaderHelper;