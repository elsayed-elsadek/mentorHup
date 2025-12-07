
export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  password: string;
  confirmPassword: string;
  agreeTerms?: boolean;  
  rememberMe?: boolean;   
}

export interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
  general?: string;
    agreeTerms?: string;    
  rememberMe?: string;    
}

export type JoinAs = "mentor" | "student";
// export type AuthMode = "login" | "register";
// export type AuthAction = "login" | "register" | "resetPassword";
// export type PasswordAction = "reset" | "change";
