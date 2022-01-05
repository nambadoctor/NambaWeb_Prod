import { getAuth } from 'firebase/auth'
import jwt_decode from "jwt-decode";

var authToken: string = ""

const GetIDTokenExpiryDate = (idToken: string) => {
  var decoded = jwt_decode(String(idToken)) as {};
  var expiryTimeStamp = 0;
  Object.keys(decoded).map((key) => {
    if (key == "exp") {
      expiryTimeStamp = (decoded as any)[key] //type exposed with "any" type
    }
  })

  const expiryDate = new Date(expiryTimeStamp * 1000);

  return expiryDate;
}

async function GetFirebaseAuthToken() {
  if (authToken) {
    const currentDateTime = new Date();
    const tokenExpiryTime = GetIDTokenExpiryDate(authToken)

    if (tokenExpiryTime < currentDateTime) {
      authToken = await FirebaseAuthTokenHelper();
    }
  } else {
    authToken = await FirebaseAuthTokenHelper();
  }

  return authToken
}

const FirebaseAuthTokenHelper = async (): Promise<string> => {
  return new Promise<string>((resolve) => {
    getAuth().currentUser!.getIdToken(/* forceRefresh */ true).then(function (idToken) {
      authToken = String(idToken);
      GetIDTokenExpiryDate(String(idToken))
      resolve(String(idToken))
    }).catch(function (error) {
      console.log(error);
      resolve(String(error))
    });
  });
};

export default FirebaseAuthTokenHelper