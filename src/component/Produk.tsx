import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Produk = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../image/3.png')}
                style={styles.productImage}
            />
            <View style={styles.additionalView}>
                <Text style={styles.additionalText}>CORNETTO OREO</Text>
                <View style={{
                    flexDirection: 'row',
                    paddingLeft: 10,
                    alignItems: 'center',
                }}>
                    <Ionicons name="star" size={25} color="#FFF" style={{ marginRight: 10 }} />
                    <View style={{
                        width: 68,
                        height: 63,
                        backgroundColor: '#E966A0',
                        borderRadius: 10,
                        marginTop: 280,
                        marginRight: 40,
                        marginLeft: -40,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Ionicons name="heart" size={45} color="#FFF" />
                    </View>
                    <View style={{
                        width: 264,
                        height: 63,
                        backgroundColor: '#E966A0',
                        borderRadius: 10,
                        marginTop: 280,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 25 }}>Masukan Keranjang</Text>
                    </View>
                </View>
            </View>
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
    productImage: {
        width: 300,
        height: 300,
        borderRadius: 10,
    },
    additionalView: {
        position: 'relative',
        width: 430,
        height: 448,
        backgroundColor: '#F9F5F6',
        borderTopRightRadius: 80,
        borderTopLeftRadius: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    additionalText: {
        color: '#FF52A2',
        fontSize: 25,
        marginTop: 20,
    },
});

export default Produk;
