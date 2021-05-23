import { useState } from 'react';
import store from 'store';

const useLocalStorage = (key, value) => {
  const [storedData, setStoredData] = useState(() => {
    try {
      const data = store.get(key);
      return data || value;
    } catch (error) {
      return value;
    }
  });

  const setData = (newValue) => {
    setStoredData(newValue);
    store.set(key, newValue);
  };

  return [storedData, setData];
};

export default useLocalStorage;
