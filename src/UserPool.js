import { CognitoUserPool} from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "ca-central-1_r5HOtLddy",
    ClientId: "3bl1nl7dv0c1en9i7rea5b8ibl"
}

export default new CognitoUserPool(poolData);