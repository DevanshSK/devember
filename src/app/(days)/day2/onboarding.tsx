import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

// Fonts Import
import { FontAwesome5 } from '@expo/vector-icons';

const OnboardingScreen = () => {
    return (
        <View style={styles.page}>
            <Stack.Screen
                options={{ headerShown: false }}
            />

            <FontAwesome5 name="people-arrows" size={24} color="black" />
            <Text style={styles.title}>Track Every transaction</Text>
            <Text style={styles.description}>Eos temporibus corrupti nemo debitis cumque magni possimus.Est dignissimos aut ab dolor velit natus quod sunt possimus.</Text>
        </View>
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    page: {
        // alignItems: "center",
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#16141a",
        padding: 20
    },
    image: {},
    title: {
        fontFamily: "InterBlack",
        color: "#fdfdfd",
        fontSize: 26,
        letterSpacing: 1.3
    },
    description: {
        color: "gray",
        fontFamily: "Inter",
        fontSize: 18
    },
})