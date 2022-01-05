import { getAuth } from 'firebase/auth'
import jwt_decode from "jwt-decode";

var idToken: string = ""

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

const RefreshAuthToken = async (): Promise<string> => {
  return new Promise<string>((resolve) => {
    getAuth().currentUser!.getIdToken(/* forceRefresh */ true).then(function (idToken) {
      idToken = String(idToken);
      resolve(String(idToken))
    }).catch(function (error) {
      console.log(error);
      resolve(String(error))
    });
  });
};

async function GetFirebaseAuthToken() {
  if (idToken) {
    const currentDateTime = new Date();
    const tokenExpiryTime = GetIDTokenExpiryDate(idToken)

    if (tokenExpiryTime < currentDateTime) {
      idToken = await RefreshAuthToken();
    }
    
  } else {
    idToken = await RefreshAuthToken();
  }

  return idToken
}

export default GetFirebaseAuthToken;