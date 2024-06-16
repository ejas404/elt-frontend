import { UserData } from "../app/core/interfaces/auth.interface";
import { decodeUserToken } from "../app/core/utils/jwt.helper";

const SERVER_URL = 'http://localhost:3344'
const userData = decodeUserToken()

export const environment = {
    API_URL : `${SERVER_URL}/api`
};
