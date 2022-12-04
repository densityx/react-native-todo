import React from 'react';
import {StyleSheet, View} from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import Todo from './components/Todo';

export default function App() {
    return (
        <View style={styles.container}>
            <Todo/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#fff',
    },
});
