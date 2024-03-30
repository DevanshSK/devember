import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const DayDetailsScreen = () => {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: "Day 2: Onboarding" }} />
            <Text style={styles.headerText}>DayDetailsScreen</Text>

            <Link href={"/day2/onboarding"} asChild>
                <Button color={"#333"} title="Go to Onboarding" />
            </Link>
        </View>
    )
}

export default DayDetailsScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    headerText: {
        fontWeight: "600",
        fontSize: 25,
        marginVertical: 10
    },
    button: {
        backgroundColor: "#333"
    }
})