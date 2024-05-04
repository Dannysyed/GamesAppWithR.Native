import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import GameItem from '../components/GameItem';

const StartGamesScreen = ({ navigation }) => {
    let Games = [
        { id: '1', GameName: 'Memory Match' },
        { id: '2', GameName: 'Word Search' },
        { id: '3', GameName: 'Trivia Quiz' },
        { id: '4', GameName: 'Crossword Puzzle' },
        { id: '5', GameName: 'Sudoku' },
        { id: '6', GameName: 'Hangman' },
    ];

    const [enteredNumber, setEnteredNumber] = useState('');

    let numberInputHandler = (text) => {
        setEnteredNumber(text);
    };

    let Starthandler = (id) => {
        navigation.navigate('GameScreen', { data: id });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Please Select a Game</Text>

            <FlatList
                data={Games}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.game} onPress={Starthandler.bind(this, item.id)}>
                        <GameItem title={item.GameName} />
                    </TouchableOpacity>
                )}
                numColumns={2}
                horizontal={false}
                keyExtractor={({ id }) => id}
            />
        </View>
    );
};

export default StartGamesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121',
        padding: 20,
    },
    game: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginVertical: 10,
        marginHorizontal: 5,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 24,
        marginVertical: 10,
        textTransform: 'uppercase',
    },
});
