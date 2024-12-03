import { jwtDecode } from "jwt-decode";

export const checkAuthAndRedirect = (navigate) => {
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  const token = getCookie('JWT');

  if (!token) {
    
    navigate('/login');
    return;
  }

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decodedToken.exp < currentTime) {
   
      navigate('/login');
    }

    console.log("sds")
     return true
  } catch (error) {
 
    navigate('/login');
  }
};
