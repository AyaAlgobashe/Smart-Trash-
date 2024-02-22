export const saveDataOnStorage = (title, data) => {
  if (data !== undefined && data !== null) {
    localStorage.setItem(title, JSON.stringify(data));
  } else {
  }
};

export const getDataFromStorage = (title) => {
  return localStorage.getItem(title) ? localStorage.getItem(title) : undefined;
};

export const clearStorage = () => {
  localStorage.clear();
};
