import React, {useState, useRef} from 'react';
import UserContext from './UserContext';

function ContextProvider({children}) {
    const [accessToken, setAccessToken] = useState('');

    return (
        <UserContext.Provider
          value={{
            accessToken,
            setAccessToken
        }}>
      {children}
    </UserContext.Provider>
  );
}

export default ContextProvider;
