import React, { Component } from "react"
import { Container, Content, Button, Header, Text, Input, Icon, Item, List, ListItem, Toast } from "native-base"
import DatePicker from "react-native-datepicker"
import Midware from "../Store/Middleware/PatientMiddleware"
import { connect } from "react-redux"
import { StatusBar } from "react-native"


function mapStateToProps(state) {
    return {
        componentState: state.Reducer.searchedPatientByDate,
        allPatients: state.Reducer.getAllData,
        isAllPatient: state.Reducer.getAllPatient,
        isEmpty: state.Reducer.dataEmpty,

    }
}


function mapDispatchToProps(dispatch) {
    return {
        getData: (name) => {
            dispatch(Midware.SearchPatientBYDate(name))
        }
    }
}

class SearchByDate extends Component {
    static navigationOptions = {
        header: false,
        title: "Search By Date"
    }

    constructor() {
        super()
        this.state = {
            date: '',
            patients: [],
            error: false,
            showToast: false,

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







    multiGet() {
        if (this.state.date !== '') {
            let date = this.state.date
            this.props.getData(date)
        }
        else {
            Toast.show({
                text: 'Select Date',
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

                < Header searchBar rounded
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
                        <DatePicker
                            style={{ width: 200, backgroundColor: "green" }}
                            date={this.state.date}
                            mode="date"
                            placeholder="Search Patient By Date"
                            format="YYYY-MM-DD"
                            minDate="2017-05-01"
                            maxDate="2018-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 4,
                                    top: 4,
                                    marginLeft: 0
                                },
                            }}
                            onDateChange={(date) => { this.setState({ date: date }) }}
                        />
                        <Button
                            success
                            onPress={this.multiGet.bind(this)}>
                            <Text>
                                Search
            </Text>
                        </Button>
                    </Item>
                </Header>

                {this.error()}

                <Content
                    style={{ backgroundColor: "#546E7A" }}

                >
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
export default connect(mapStateToProps, mapDispatchToProps)(SearchByDate)