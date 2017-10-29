import { DrawerNavigator } from "react-navigation"


import AllPatient from "../components/AllPatient"
import DataEntry from "../components/DataEntry"
import Home from "../components/Home"
import Search from "../components/search"
import SearchByDate from "../components/SearchByDate"
import Splash from "../components/splash"

const Drawer = DrawerNavigator({


    homeRoute: {
        screen: Home
    },

    DateEntryRoute: {
        screen: DataEntry
    },

    SearchByDateRoute: {
        screen: SearchByDate
    },
    SearchRoute: {
        screen: Search
    },

    AllPatientRoute: {
        screen: AllPatient
    },



  




})


export default Drawer