import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

// Fonts Import
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const OnboardingScreen = () => {
    return (
        <SafeAreaView style={styles.page}>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
            />

            <View style={styles.pageContent}>
                <FontAwesome5
                    style={styles.image}
                    name="people-arrows"
                    size={150}
                    color="#ffda11"
                />
                <View style={styles.footer}>
                    <Text style={styles.title}>Track Every transaction</Text>
                    <Text style={styles.description}>Eos temporibus corrupti nemo debitis cumque magni possimus.Est dignissimos aut ab dolor velit natus quod sunt possimus.</Text>

                    <View style={styles.buttonRow}>

                        <Text style={styles.buttonText}>Skip</Text>

                        <Pressable style={styles.button}>
                            <Text style={styles.buttonText}>Continue</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    page: {
        // alignItems: "center",
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#16141a",
    },
    pageContent: {
        padding: 20,
        flex: 1
    },
    image: {
        alignSelf: "center",
        margin: 20
    },
    footer: {
        marginTop: "auto"
    },
    title: {
        fontFamily: "InterBlack",
        color: "#fdfdfd",
        marginVertical: 10,
        fontSize: 50,
        letterSpacing: 1.3
    },
    description: {
        color: "gray",
        fontFamily: "Inter",
        fontSize: 18,
        lineHeight: 28
    },
    buttonRow: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 50
    },
    button: {
        backgroundColor: "#302e38",

        borderRadius: 50,
        alignItems: "center",
        flex: 1
    },
    buttonText: {
        color: "#fdfdfd",
        fontFamily: "InterBold",
        fontSize: 16,
        padding: 15,
        paddingHorizontal: 25
    }
})