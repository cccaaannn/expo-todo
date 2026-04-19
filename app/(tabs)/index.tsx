import { Button, ScrollView, View } from 'react-native';

import ThemedTextInput from '@/components/themed-text-input';
import TodoCard from '@/components/todo-card';
import { Todo } from '@/constants/todo';
import useSave from '@/hooks/use-save';
import { Text } from '@react-navigation/elements';
import { randomUUID } from 'expo-crypto';
import { useEffect, useState } from 'react';


const TodoScreen = () => {

	const [todos, setTodos] = useState<Todo[]>([]);
	const [title, setTitle] = useState<string>('');
	const { save, load } = useSave<Todo[]>('todos');

	const onTodoAdd = () => {
		if (title.trim().length === 0) return;

		const newTodo: Todo = {
			id: randomUUID(),
			title: title,
			completed: false,
			createdAt: new Date().toISOString(),
		};
		const updatedTodos = [...todos, newTodo];
		setTodos(updatedTodos);
		save(updatedTodos);
		setTitle('');
	}

	const onTodoCompleted = (id: string, completed: boolean) => {
		const updatedTodos = todos.map(todo => {
			if (todo.id === id) {
				return { ...todo, completed: completed };
			}
			return todo;
		});
		setTodos(updatedTodos);
		save(updatedTodos);
	}

	const onTodoDeleted = (id: string) => {
		const updatedTodos = todos.filter(todo => todo.id !== id);
		setTodos(updatedTodos);
		save(updatedTodos);
	}

	useEffect(() => {
		(async () => {
			const data = await load();
			if (data) {
				setTodos(data);
			}
		})();
	}, [load]);

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
				Todos
			</Text>

			<View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
				<ThemedTextInput
					placeholder="Enter todo"
					value={title}
					onChangeText={setTitle}
					onSubmitEditing={onTodoAdd}
					maxLength={100}
					style={{
						flex: 1
					}}
				/>
				<Button
					title="+ ADD"
					onPress={onTodoAdd}
				/>
			</View>

			<ScrollView style={{ marginBottom: 20, marginTop: 20 }}>
				{
					todos.map(todo =>
						<View key={todo.id}>
							<TodoCard
								todo={todo}
								onTodoCompleted={onTodoCompleted}
								onTodoDeleted={onTodoDeleted}
							/>

							<View
								style={{
									borderBottomColor: 'black',
									borderBottomWidth: 1,
									marginTop: 10,
									marginBottom: 10,
								}}
							/>
						</View>
					)
				}
			</ScrollView>
		</View>
	);
}

export default TodoScreen;
