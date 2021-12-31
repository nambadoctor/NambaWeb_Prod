import FirebaseAuthTokenHelper from '../../Auth/FirebaseUserInfoHelper';

const GetAuthHeader = async (): Promise<{
  "Content-type": string;
  Authorization: string;
}> => {
  const userToken = await FirebaseAuthTokenHelper();
  return {
    "Content-type": "application/json",
    "Authorization": "Bearer " + userToken //userState.authToken,
  }
}

export default GetAuthHeader;