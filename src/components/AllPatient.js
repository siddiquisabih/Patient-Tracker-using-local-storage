import React, { Component } from "react"
import { Button, Container, Content, Text, Header, Icon, Left, Right, Body, Title, List, ListItem } from "native-base"
import { AsyncStorage } from "react-native"
import { connect } from "react-redux"
import Midware from "../Store/Middleware/PatientMiddleware"
import { StatusBar } from "react-native"

function mapStateToProps(state) {
    return {
        componentState: state.Reducer.getAllData
    }
}


function mapDispatchToProps(dispatch) {
    return {

        getData: () => {
            dispatch(Midware.getAllPatient())
        }
    }
}


class AllPatient extends Component {
    static navigationOptions = {
        header: false,
        title : "View All Patients"
        
    }

    componentWillMount() {
        console.disableYellowBox = true
    }

    componentDidMount() {

        this.props.getData()
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: 'green' }}>
                    <StatusBar
                        hidden
                    />
                    <Left>
                        <Button transparent
                            onPress={() => { this.props.navigation.navigate('DrawerOpen') }}
                        >
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>All Patient List</Title>
                    </Body>
                    <Right />
                </Header>

                <Content
                    style={{ backgroundColor: "#546E7A" }}>

                    {
                        this.props.componentState.map((m, v) => {
                            return (

                                <List key={v}>

                                    <ListItem itemDivider style={style.nameStyle} >
                                        <Text>{m.name}</Text>
                                    </ListItem>

                                    <ListItem >
                                        <Text>Disease : {m.disease}</Text>
                                    </ListItem>

                                    <ListItem >
                                        <Text>Medication : {m.medication}</Text>
                                    </ListItem>

                                    <ListItem >
                                        <Text>Cost : {m.cost}</Text>
                                    </ListItem>

                                    <ListItem >
                                        <Text>Date : {m.date}</Text>
                                    </ListItem>

                                </List>
                            )
                        })
                    }
                </Content>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPatient)

style = {
    nameStyle: {
        justifyContent: 'center',
    }
}