import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({});

const UsecontextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(undefined);

  useEffect(() => {
    getloggedIn();
  }, []);

  const getloggedIn = async () => {
    try {
      await axios.get('/isloggedIn').then((res) => {
        console.log(res);
        if (res.data.status) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      });
    } catch (error) {
      console.log('something went wrong', error);
    }
  };

  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn, getloggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UsecontextProvider;
