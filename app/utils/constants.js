// export const API_BASE_URL = "https://us-central1-hr-ammag.cloudfunctions.net/application"
export const API_BASE_URL = "http://192.168.2.30:8000"


export const JWT_TOKEN="jwt_token"
export const ISHR="isHr"
export const USER_EMAIL="user_email"

export const ROUTES_NAMES = {
    splash: "splash",
    login: "login",
    signup: "signup",
    otp:"otp",
    home:"home",
    dashboard: "dashbaord",
    donationmethod: "donationmethod",
    addcards: "addcards",
    verifyEmail: "verifyEmail",
    myAbsents:"myAbsents",
    myLateComings:"myLateComings",
    hrDashboard:"hrDashboard",
    userDetail:"userDetail",
    searchScreen:"searchScreen",
    detailscreen:"detailscreen",
    trailer:"trailer",
    tickets:"tickets",

}

export const EMAIL_VALIDATION_REGEX=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const STRONG_PASSWORD_VALIDATION_REGEX=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
export const EMAIL_OTP_CODE_VALIDATION_REGEX=/^\d{4}$/;


