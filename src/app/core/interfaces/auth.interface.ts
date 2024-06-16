export interface UserData{
    userId : string
    fullName : string
    password : string
    birthdate :  string 
    role : string
    token ?: string;
    biography?:string
}

export interface LoginAuth{
    userId : string,
    password : string
}

export interface SignUpAuth{
    userId : string
    fullName : string
    password : string
    birthdate :  string 
}


export interface UserDataResponse {
    userId: string;
    fullName: string; 
    birthdate: Date;  
    biography ?: string;
    token: string;
}