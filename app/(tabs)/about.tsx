import { View } from 'react-native';

import { Text } from '@react-navigation/elements';


const TodoScreen = () => {
	return (
		<View
			style={{
				maxWidth: 600,
				flex: 1,
				padding: 20,
				alignSelf: 'center',
				width: '100%',
				display: 'flex',
				gap: 15,
			}}
		>
			<Text style={{ fontSize: 24, fontWeight: 'bold' }}>
				About
			</Text>

			<View>
				<Text>
					This is a simple Todo application built with Expo and React Native.
				</Text>
			</View>
		</View>
	);
}

export default TodoScreen;
