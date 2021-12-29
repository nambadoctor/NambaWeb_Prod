import { getAuth } from 'firebase/auth';
import { useSelector } from 'react-redux';
import FirebaseAuthTokenHelper from '../../Auth/FirebaseUserInfoHelper';
import { RootStore } from '../../store';

export var globalOrganisationId:string = ""

const GetHeaderHelper = async (): Promise<{
  "Content-type": string;
  Authorization: string;
  OrganisationId: string;
}> => {
  const userToken = await FirebaseAuthTokenHelper();
  console.log("USER TOKEN: " + userToken)
  return {
    "Content-type": "application/json",
    "Authorization": "Bearer " + userToken, //userState.authToken,
    "OrganisationId": "61762f1099b600af53623977" //globalOrganisationId
  }
}

export default GetHeaderHelper;