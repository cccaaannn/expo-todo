import { Colors } from "@/constants/theme";
import { useThemeColor } from "@/hooks/theme/use-theme-color";
import { TextInput } from "react-native";


const ThemedTextInput = (props: React.ComponentProps<typeof TextInput>) => {
	const themeColor = useThemeColor(
		{ light: Colors.light.text, dark: Colors.dark.text },
		'text'
	);

	return (
		<TextInput
			{...props}
			placeholderTextColor={themeColor + '80'}
			style={[
				{
					color: themeColor,
					borderColor: '#ccc',
					borderWidth: 1,
					padding: 10,
					borderRadius: 5,
				},
				props.style,
			]}
		/>
	)
}

export default ThemedTextInput;
