import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/theme/use-color-scheme.web';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';


const PagesLayout = () => {
	const colorScheme = useColorScheme();

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Tabs
				screenOptions={{
					tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
					headerShown: false,
				}}>
				<Tabs.Screen
					name="index"
					options={{
						title: 'Todos',
						tabBarIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />,
					}}
				/>
				<Tabs.Screen
					name="about"
					options={{
						title: 'About',
						tabBarIcon: ({ color, size }) => <Ionicons name="information-circle" color={color} size={size} />,
					}}
				/>
			</Tabs>
		</SafeAreaView>
	);
}

export default PagesLayout;
