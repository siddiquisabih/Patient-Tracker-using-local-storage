import React, { Component } from 'react'
import { Image, View } from 'react-native'
import { Spinner, Container } from "native-base"


import Midware from "../Store/Middleware/PatientMiddleware"
import { connect } from "react-redux"



function mapDispatchToProps(dispatch) {

    return {
        getData: () => {
            dispatch(Midware.getAllPatient())
        }
    }

}


class Splash extends Component {

    static navigationOptions = {
        header: false,
        title: "Splash"
    }

    componentWillMount() {
        this.props.getData()
        setTimeout(() => this.navigate(), 500)

        console.disableYellowBox =true

    }

    navigate() {
        this.props.navigation.navigate("homeRoute")

    }

    render() {
        return (

            <Image
                source={require("../images/splash.jpg")}
                style={style.backgroundImage}

            >

                <Container
                    style={style.spinner}
                >
                    <Spinner />

                </Container>


            </Image>

        )
    }
}
export default connect(null, mapDispatchToProps)(Splash)

var style = {
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: "cover"
    },
    spinner: {
        justifyContent: "center",
    }
}
