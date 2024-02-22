import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

const createStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve();
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createStorage();

export default storage;