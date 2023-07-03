type StorageType = 'session' | 'local';

interface Props {
  getItem: (key: string, type?: StorageType) => string;
  setItem: (key: string, value: string, type?: StorageType) => boolean;
  removeItem: (key: string, type?: StorageType) => void;
}

const UseStorage = (): Props => {
  const storageType = (type?: StorageType): 'localStorage' | 'sessionStorage' =>
    `${type ?? 'session'}Storage`;

  const isBrowser: boolean = ((): boolean => typeof window !== 'undefined')();

  const getItem = (key: string, type?: StorageType) => {
    if (isBrowser) {
      return window[storageType(type)][key]
    }
    return '';
  }    

  const setItem = (key: string, value: string, type?: StorageType) => {
    if (isBrowser) {
      window[storageType(type)].setItem(key, value);
      return true;
    }
    return false;
  };

  const removeItem = (key: string, type?: StorageType) => window[storageType()];

  return { getItem, setItem, removeItem };
};

export default UseStorage;
