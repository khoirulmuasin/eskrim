import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Akun = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Halaman Akun</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFC0D9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        color: '#FF52A2',
    },
});

export default Akun;
