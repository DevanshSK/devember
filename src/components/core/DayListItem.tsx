import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

type Props = {
    day: number;
}

const DayListItem = ({ day }: Props) => {
    return (
        <Link href={`/day${day}`} asChild>
            <Pressable style={styles.box}>
                <Text style={styles.text}>{day}</Text>
            </Pressable>
        </Link>
    )
}

export default DayListItem

const styles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: "#f9ede3",
        aspectRatio: 1,
        // width: 300,
        // height: 300,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 20,
        borderColor: "#9b4521"
    },
    text: {
        color: "#9b4521",
        fontSize: 70,
        fontFamily: "Amatic"
    }
})