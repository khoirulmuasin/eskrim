import React from 'react';
import { View, Text, TextInput, Image, ScrollView, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
    return (
        <View style={styles.container}>
            {/* Single row with icons and text */}
            <View style={styles.rowContainer}>
                <Ionicons name="albums-outline" size={40} color="#FF90BC" style={styles.icon} />
                <View style={styles.textContainer}>
                    <Text style={[styles.title, { color: '#FF90BC' }]}>ES KRIM TERBARU</Text>
                    <Text style={[styles.subtitle, { color: '#FF90BC' }]}>Iskrim lezat kami</Text>
                </View>
                <Ionicons name="heart-circle-outline" size={45} color="#FF90BC" style={styles.icon} />
            </View>

            {/* TextInput with search icon */}
            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="#FF90BC" style={styles.searchIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Search..."
                    placeholderTextColor="#FF90BC"
                    underlineColorAndroid="transparent"
                />
            </View>

            {/* Image and Text components in a row */}
            <View style={styles.imagesRowContainer}>
                <View style={styles.imageTextContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../image/2.png')}
                            style={styles.image}
                        />
                    </View>
                    <Text style={[styles.text, { color: '#FF90BC', fontSize: 10 }]}>CORNETTO</Text>
                </View>

                <View style={styles.imageTextContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../image/2.png')}
                            style={styles.image}
                        />
                    </View>
                    <Text style={[styles.text, { color: '#FF90BC', fontSize: 10 }]}>CORNETTO</Text>
                </View>

                <View style={styles.imageTextContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../image/2.png')}
                            style={styles.image}
                        />
                    </View>
                    <Text style={[styles.text, { color: '#FF90BC', fontSize: 10 }]}>CORNETTO</Text>
                </View>
                <View style={styles.imageTextContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../image/2.png')}
                            style={styles.image}
                        />
                    </View>
                    <Text style={[styles.text, { color: '#FF90BC', fontSize: 10 }]}>CORNETTO</Text>
                </View>
            </View>

            <Text style={styles.populerText}>Populer</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingLeft: 20, paddingRight: 20 }}
            >
                <View style={styles.additionalView}>
                    <Image
                        source={require('../image/3.png')}
                        style={styles.additionalImage}
                    />
                    <Text style={[styles.additionalText, { color: '#E966A0', fontSize: 25 }]}>CORNETTO OREO</Text>

                    <View style={styles.additionalRow}>
                        <View style={styles.iconRow}>
                            <Ionicons name="star" size={25} color="#E966A0" style={styles.additionalIcon} />
                            <Ionicons name="star" size={25} color="#E966A0" style={styles.additionalIcon} />
                            <Ionicons name="star" size={25} color="#E966A0" style={styles.additionalIcon} />
                            <Ionicons name="star" size={25} color="#E966A0" style={styles.additionalIcon} />
                            <Ionicons name="star" size={25} color="#E966A0" style={styles.additionalIcon} />
                        </View>

                        <Text style={[styles.additionalText, { color: '#E966A0', fontSize: 25, alignSelf: 'center' }]}>Rp 20k</Text>
                    </View>
                </View>
                <View style={styles.additionalView}>
                    <Image
                        source={require('../image/3.png')}
                        style={styles.additionalImage}
                    />
                    <Text style={[styles.additionalText, { color: '#E966A0', fontSize: 25 }]}>CORNETTO OREO</Text>

                    <View style={styles.additionalRow}>
                        <View style={styles.iconRow}>
                            <Ionicons name="star" size={25} color="#E966A0" style={styles.additionalIcon} />
                            <Ionicons name="star" size={25} color="#E966A0" style={styles.additionalIcon} />
                            <Ionicons name="star" size={25} color="#E966A0" style={styles.additionalIcon} />
                            <Ionicons name="star" size={25} color="#E966A0" style={styles.additionalIcon} />
                            <Ionicons name="star" size={25} color="#E966A0" style={styles.additionalIcon} />
                        </View>

                        <Text style={[styles.additionalText, { color: '#E966A0', fontSize: 25, alignSelf: 'center' }]}>Rp 20k</Text>
                    </View>
                </View>
                {/* Tambahkan view tambahan di sini sesuai kebutuhan */}
            </ScrollView>
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F5F6',
        padding: 20,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 10,
        justifyContent: 'space-between',
    },
    icon: {
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: 'gray',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#FED9ED',
        padding: 10,
        borderRadius: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        color: '#FF90BC',
        fontSize: 16,
    },
    imagesRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    imageTextContainer: {
        alignItems: 'center',
    },
    imageContainer: {
        height: 71,
        width: 66,
        backgroundColor: '#FED9ED',
        alignItems: 'center',
        justifyContent:
            'center',
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    text: {
        color: '#FF90BC',
        marginTop: 5,
        fontSize: 10,
    },
    populerText: {
        color: '#FF90BC',
        fontSize: 25,
        marginTop: 20,
    },
    additionalView: {
        width: 287,
        height: 287,
        backgroundColor: '#FFC7EA',
        marginTop: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginEnd: 15,
    },
    additionalImage: {
        width: 215,
        height: 226,
    },
    additionalText: {
        textAlign: 'center',
    },
    iconRow: {
        flexDirection: 'row',
        marginTop: 10,
    },
    additionalIcon: {
        marginRight: 5,
    },
    additionalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 50,
    },
});

export default Home;
