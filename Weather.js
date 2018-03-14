import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from 'expo';

export default class Weather extends Component {
    render() {
        return(
            <LinearGradient colors={['#00c6fb', '#005bea']} style={styles.container}>
                <View style={styles.upper}>
                    <Text>here is icon!</Text>
                    <Text style={styles.temp}>35˚</Text>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>Rain shower! REMIXXXX!</Text>
                    <Text style={styles.subtitle}>For more info look outside!!</Text>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lower : {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25
    },
    temp: {
        fontSize: 38,
        color: 'white',
        marginTop: 10,
    },
    title: {
        fontSize: 38,
        color: 'white',
        marginBottom: 10,
        fontWeight: '300'
    },
    subtitle: {
        fontSize: 24,
        color: 'white',
        marginBottom: 40
    }
});