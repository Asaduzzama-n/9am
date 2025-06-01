export interface User {
    _id: string;
    username: string;
    shops: string[];
  }
  
  export interface SignupFormData {
    username: string;
    password: string;
    shops: string[];
  }
  
  export interface SigninFormData {
    username: string;
    password: string;
    rememberMe: boolean;
  }