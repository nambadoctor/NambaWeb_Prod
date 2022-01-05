import GetFirebaseAuthToken from '../../Auth/FirebaseUserInfoHelper';

async function GetAuthHeader(): Promise<{
  "Content-type": string;
  Authorization: string;
}> {
  var userToken = await GetFirebaseAuthToken();

  return {
    "Content-type": "application/json",
    "Authorization": "Bearer " + userToken,
  }
}

export default GetAuthHeader;