declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    timer: number;
  }
}

function setStorageObj(key: string, obj: any): void {
  window.localStorage.setItem(key, JSON.stringify(obj));
}

function getStorageObj(key: string): any | null {
  const item = window.localStorage.getItem(key);

  if (item) {
    return JSON.parse(item);
  }
  return null;
}

export { setStorageObj, getStorageObj };
