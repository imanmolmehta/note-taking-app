import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NotesEdit from '../components/NotesEdit/NotesEdit';
import NotesList from '../components/NotesList/NotesList';

const Stack = createStackNavigator();

const NotesStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="NotesList" component={NotesList} />
            <Stack.Screen name="NotesEdit" component={NotesEdit} />
        </Stack.Navigator>
    );
}

export default NotesStack;