import React, { Component } from "react"
import { Container, Content, Button, Header, Text, Input, Icon, Item, Toast, List, ListItem, Left, Body, Right, Title } from "native-base"
import { AsyncStorage, StatusBar, Image } from "react-native"
import Midware from "../Store/Middleware/PatientMiddleware"
import { connect } from "react-redux"


function mapStateToProps(state) {
    return {
        componentState: state.Reducer.searchedPatientByName,
        allPatients: state.Reducer.getAllData,
        isAllPatient: state.Reducer.getAllPatient,
        isEmpty: state.Reducer.dataEmpty,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getData: (name) => {
            dispatch(Midware.SearchPatientBYName(name))
        }
    }
}

class Search extends Component {
    static navigationOptions = {
        header: false,
        title: "Search By Name"
    }

    constructor() {
        super()
        this.state = {
            name: '',
            showToast: false,
            patients: [],
            error: false,
        }
    }

    componentWillMount() {
        if (this.props.isAllPatient) {
            this.setState({
                patients: this.props.allPatients,
                error: false
            })
        }
        console.disableYellowBox = true
    }


    componentWillReceiveProps(prop) {
        if (!prop.isEmpty) {
            this.setState({
                patients: prop.componentState
            })
        }

        if (prop.isEmpty) {
            this.setState({
                patients: [],
                error: true
            })
        }

    }

    data() {
        if (this.state.name != '') {
            let name = this.state.name
            this.props.getData(name)
        }

        else {
            Toast.show({
                text: 'Enter Name',
                position: 'bottom',
                buttonText: 'OK',
                type: 'danger',
                duration: 1000
            })
        }
        this.setState({ error: false })
    }
    error() {

        if (this.state.error) {
            return <Text style={{ alignSelf: "center" }}> NOT FOUND</Text>

        }
    }

    render() {
        return (
            <Container>
                <Header searchBar rounded
                    style={{ backgroundColor: 'green' }}>
                    <StatusBar
                        hidden
                    />
                    <Item>

                        <Button
                            success
                            onPress={() => { this.props.navigation.navigate('DrawerOpen') }}
                        >
                            <Icon name='menu' />
                        </Button>
                        <Icon name="ios-people" />
                        <Input placeholder="Search By Name"
                            onChangeText={(text) => this.setState({
                                name: text
                            })}
                        />
                        <Icon name="ios-search" />

                        <Button
                            success
                            onPress={this.data.bind(this)}>
                            <Text>Search</Text>
                        </Button>

                    </Item>

                </Header>
                {this.error()}
                <Content
                    style={{ backgroundColor: "#546E7A" }}>

                    {
                        this.state.patients.map((m, v) => {
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
export default connect(mapStateToProps, mapDispatchToProps)(Search)

style = {
    nameStyle: {
        justifyContent: 'center',
    }
}