import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import RootNavigator from "./src/views/components/navigator/root.navigator"

export default function App() {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    )
}
