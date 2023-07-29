import React, { createContext, useEffect, useState } from 'react';


const AppContext = createContext();

const AppProvider = ({ children }) => {

  const [follow, setFollow] = useState(JSON.parse(typeof window !== 'undefined' ? localStorage.getItem('follow') : 'null'
  ) || [])

  const handleFollow = (value, followed) => {
    setFollow([...follow, value])
    if(followed)
    {
      const removeItem = follow.filter((e) => e!== value)
      setFollow([...removeItem])
    }
  }

  useEffect(() => {
    localStorage.setItem('follow', JSON.stringify(follow));
  }, [follow]);


  return (
    <AppContext.Provider value={{ follow, handleFollow }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
