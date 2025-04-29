import { Tabs } from "expo-router"
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen 
                name="power"
                options={{
                    title: "Power",
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="flash-outline" size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen 
                name="water"
                options={{
                    title: "Water",
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="water-outline" size={size} color={color} />
                    )
                }}
            />
        </Tabs>
    );
}