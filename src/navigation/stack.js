import { StackNavigator } from "react-navigation"


import Splash from "../components/splash"
import Drawer from "./Drawer"


const Stack = StackNavigator({

    Splash: {
        screen: Splash
    },

    Drawer: {
        screen: Drawer,
        navigationOptions: props => ({
            header: false,
        })
    }

})

export default Stack