import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
export const UserContext = createContext({});

const UsecontextProvider = ({ children }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    axios
      .post('/login', {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        if (res.data.status) {
          setLoggedIn(true);
          setIsLoading(true);
          toast.success(res.data.message);
          window.localStorage.setItem('token', res.data.data);
          navigate('/');
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((error) => {
        console.error('error', error);
        toast.error('Login failed');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <UserContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        setEmail,
        setPassword,
        email,
        password,
        loginUser,
        isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UsecontextProvider;
