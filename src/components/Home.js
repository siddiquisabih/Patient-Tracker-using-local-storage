import React, { Component } from "react"
import { Container, Content, Button, Header, Text, Input, Icon, Item, Left, Right, Body, Title } from "native-base"
import { StatusBar, Image } from 'react-native'
class Home extends Component {

    static navigationOptions = {
        header: false,
        title: "Home"
    }
    componentWillMount() {
        console.disableYellowBox = true
    }
    render() {
        return (

            <Container>
                <Image
                    source={require("../images/stethoscope.jpg")}
                    style={styles.backgroundImage}
                >
                    <Header style={{ backgroundColor: 'green' }}>
                        <StatusBar
                            backgroundColor="green"
                            hidden
                            barStyle="default" />
                        <Left>
                            <Button transparent
                                onPress={() => { this.props.navigation.navigate('DrawerOpen') }}>
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Patient Tracker</Title>
                        </Body>
                        <Right />
                    </Header>

                    <Container
                        style={styles.instructions}
                    >


                        <Text style={{ color: '#333333' }} >
                            Welcome To Patient Tracker Application
                </Text>

                    </Container>

                    <Container
                        style={styles.button}
                    >



                        <Button
                            onPress={() => { this.props.navigation.navigate('DrawerOpen') }}
                            success
                        >

                            <Text>Dashboard</Text>

                        </Button>
                    </Container>

                </Image>
            </Container>
        )
    }
}

export default Home


const styles = {
    instructions: {
        justifyContent: 'center',
        alignSelf: "center",
    },
    button: {
        justifyContent: 'center',
        alignSelf: "center",
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: "cover"
    }
}