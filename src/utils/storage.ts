import AsyncStorage from '@react-native-async-storage/async-storage';

const key = '_native_track_storage';

export const storage = {
  setItem: async (data: Record<string, unknown>) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error(e);
    }
  },
  getItem: async () => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value) {
        const parsedvalue = JSON.parse(value);
        return parsedvalue;
      }
      return null;
    } catch (e) {
      console.error(e);
    }
  },
  removeItem: async () => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.error(e);
    }
  },
};
