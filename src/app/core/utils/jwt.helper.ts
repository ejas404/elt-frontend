import { jwtDecode } from "jwt-decode"
import { UserData } from "../interfaces/auth.interface"

export const setToken = (token: string) => {
    localStorage.setItem('auth-token', token)
}

export const removeToken = () => {
    localStorage.removeItem('auth-token')
}

export const decodeUserToken = (): UserData| false => {
    const authToken = localStorage.getItem('auth-token')
    if (typeof (authToken) !== 'string') return false;
    const decodedUser: { user : UserData} = (jwtDecode(authToken))
    return decodedUser.user;
}


export const isUserToken = (): boolean => {
    const user: UserData | false = decodeUserToken()
    if (!user) return false;
    return user.role === 'User'
}



export const isAdminToken = (): boolean => {
    const user: UserData | false = decodeUserToken()
    if (!user) return false;
    return user.role === 'Admin'
}