import { Stack } from "expo-router";

// Font imports
import { useFonts, Inter_900Black, Inter_600SemiBold, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { AmaticSC_400Regular, AmaticSC_700Bold } from "@expo-google-fonts/amatic-sc";

// Splash Screen Imports
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontsLoaded, fontError] = useFonts({
        InterBlack: Inter_900Black,
        InterBold: Inter_700Bold,
        Inter: Inter_400Regular,
        InterSemi: Inter_600SemiBold,
        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold
    });



    useEffect(() => {
        if (fontsLoaded || fontError) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }


    return (
        <GestureHandlerRootView style={{ flex: 1 }}>

            <Stack
                screenOptions={{
                    animation: "ios",
                    headerTitleAlign: "center"
                }}
            >
                <Stack.Screen name="index" options={{ title: "Devember" }} />
            </Stack>
        </GestureHandlerRootView>
    )
}