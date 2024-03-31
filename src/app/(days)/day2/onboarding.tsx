import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Stack, router } from 'expo-router'

// Fonts Import
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

// Gesture Import
import { Directions, Gesture, GestureDetector } from 'react-native-gesture-handler';

const onboardingSteps = [
    {
        title: "Welcome #ADD",
        description: "Daily React Native tutorials during inside this app.",
        icon: "snowflake"
    },
    {
        title: "Learn and grow together",
        description: "Build 25+ projects together with React Native and Expo.",
        icon: "mobile"
    },
    {
        title: "Education for Children",
        description: "Contribute for the fundraiser \"Education for Children\" to help.",
        icon: "slideshare"
    },
];

const OnboardingScreen = () => {
    const [screenIndex, setScreenIndex] = useState(0);

    const data = onboardingSteps[screenIndex];

    const onContinue = () => {
        const isLastScreen = screenIndex === onboardingSteps.length - 1;
        if (isLastScreen) {
            endOnboarding()
        } else {
            setScreenIndex(prev => prev + 1);
        }
    }

    const endOnboarding = () => {
        setScreenIndex(0);
        router.back();
    }

    const fling = Gesture.Fling()
        .direction(Directions.RIGHT | Directions.LEFT)
        .onEnd((event) => {
            console.log("FLING", event);
            onContinue();
        }
    );

    return (
        <SafeAreaView style={styles.page}>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
            />
            <StatusBar style='light' animated />

            <GestureDetector gesture={fling} >

                <View style={styles.pageContent}>
                    <View style={styles.stepIndicatorContainer}>
                        {onboardingSteps.map((_, index) => (
                            <View key={index} style={[styles.stepIndicator, { backgroundColor: index === screenIndex ? "#cef202" : "gray", }]} />
                        ))}


                    </View>

                    <FontAwesome5
                        style={styles.image}
                        name={data.icon}
                        size={200}
                        color="#ffda11"
                    />
                    <View style={styles.footer}>
                        <Text style={styles.title}>{data.title}</Text>
                        <Text style={styles.description}>{data.description}</Text>

                        <View style={styles.buttonRow}>

                            <Text onPress={endOnboarding} style={styles.buttonText}>Skip</Text>

                            <Pressable onPress={onContinue} style={styles.button}>
                                <Text style={styles.buttonText}>Continue</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </GestureDetector>
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
        margin: 20,
        marginTop: 150
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
    },
    stepIndicatorContainer: {
        marginHorizontal: 15,
        display: "flex",
        flexDirection: "row",
        gap: 5
    },
    stepIndicator: {
        height: 2,
        borderRadius: 10,
        flex: 1
    }
})