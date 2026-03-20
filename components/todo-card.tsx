import { Todo } from '@/constants/todo';
import { Text } from '@react-navigation/elements';
import { Checkbox } from 'expo-checkbox';
import React from 'react';
import { Button, View } from 'react-native';

const TodoDateFormatOptions: Intl.DateTimeFormatOptions = {
	year: 'numeric',
	month: 'numeric',
	day: 'numeric',
	hour: '2-digit',
	minute: '2-digit',
	hour12: false
};

interface Props {
	todo: Todo;
	onTodoCompleted?: (id: string, completed: boolean) => void;
	onTodoDeleted?: (id: string) => void;
}

const TodoCard = (props: Props) => {

	const onComplete = (newValue: boolean) => {
		props.onTodoCompleted?.(props.todo.id, newValue);
	}

	const onDelete = () => {
		props.onTodoDeleted?.(props.todo.id);
	}

	const formattedDate = new Date(props.todo.createdAt).toLocaleDateString(undefined, TodoDateFormatOptions);

	return (
		<View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
			<View style={{ display: 'flex', gap: 10, paddingRight: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
				<Text style={{ fontSize: 12, fontWeight: '200' }}>
					{formattedDate}
				</Text>

				<Button
					title="X"
					color="#ff5c5c"
					onPress={onDelete}
				/>
			</View>
			<View style={{ display: 'flex', gap: 10, paddingRight: 10, flexDirection: 'row', alignItems: 'center' }}>
				<Checkbox
					value={props.todo.completed}
					onValueChange={onComplete}
				/>
				<View style={{ flex: 1, marginRight: 10 }}>
					<Text>
						{props.todo.title}
					</Text>
				</View>
			</View>
		</View>
	)
}

export default TodoCard;
