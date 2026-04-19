import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback } from 'react';


const useSave = <TData,>(storageKey: string) => {

	const save = useCallback(async (data: TData) => {
		try {
			const jsonData = JSON.stringify(data);
			await AsyncStorage.setItem(storageKey, jsonData);
		} catch (error) {
			console.error('Error saving data:', error);
		}
	}, [storageKey]);

	const load = useCallback(async () => {
		try {
			const jsonData = await AsyncStorage.getItem(storageKey);
			if (jsonData) {
				const data: TData = JSON.parse(jsonData);
				return data;
			}
		} catch (error) {
			console.error('Error loading data:', error);
		}
		return null;
	}, [storageKey]);

	const clear = useCallback(async () => {
		try {
			await AsyncStorage.removeItem(storageKey);
		} catch (error) {
			console.error('Error clearing data:', error);
		}
	}, [storageKey]);

	return {
		save,
		load,
		clear
	}
}

export default useSave;
