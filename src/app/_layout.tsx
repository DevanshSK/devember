import { Stack } from "expo-router";


export default function RootLayout() {
    return (
        <Stack 
            screenOptions={{  
                animation: "ios", 
                headerTitleAlign: "center" 
            }} 
        >
            <Stack.Screen name="index" options={{title: "Devember"}} />
        </Stack>
    )
}