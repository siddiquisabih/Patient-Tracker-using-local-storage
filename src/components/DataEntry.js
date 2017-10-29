import React, { Component } from "react"
import { Container, Content, Button, Form, Text, Input, Label, Item, Header, Icon, Left, Right, Body, Title, Toast } from "native-base"
import { AsyncStorage, StatusBar, Image } from "react-native"
import DatePicker from "react-native-datepicker"
import Midware from "../Store/Middleware/PatientMiddleware"
import { connect } from "react-redux"

function mapStateToProps(state) {
    return {
        componentState: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        savePatient: (data) => {
            dispatch(Midware.savePatientData(data))
        }
    }
}


var patientData = [];
class DataEntry extends Component {

    componentWillMount() {
        console.disableYellowBox = true
    }
    static navigationOptions = {
        header: false,
        title : "Add Patient"
    }
    constructor() {
        super()
        this.state = {
            name: '',
            disease: '',
            medication: '',
            cost: '',
            data: '2017-05-15',
            showToast: false

        }
    }

    saveData() {
        let data = {
            name: this.state.name,
            disease: this.state.disease,
            medication: this.state.medication,
            cost: this.state.cost,
            date: this.state.date
        }
        if (data.name !== '' && data.disease !== '' && data.medication !== '' && data.cost !== '' && data.date != undefined) {

            this.props.savePatient(data)
            Toast.show({
                text: 'Patient Added',
                position: 'bottom',
                buttonText: 'OK',
                type: 'success',
                duration: 1000
            })
            this.setState({
                name: '',
                disease: '',
                medication: '',
                cost: '',
                date: '',
            })

        }
        else {
            Toast.show({
                text: 'Fill Missing Data!',
                position: 'bottom',
                buttonText: 'OK',
                type: 'warning',
                duration: 1000
            })

        }
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
                        <Title>Create Patient</Title>
                    </Body>
                    <Right />
                </Header>

                <Content
                    style={{ backgroundColor: "#546E7A" }}
                >
                    <Form>

                        <Item floatingLabel>
                            <Label style={styles.label} >Name</Label>
                            <Input
                                onChangeText={(text) => this.setState({
                                    name: text
                                })}
                                value={this.state.name}
                            />
                        </Item>


                        <Item floatingLabel>
                            <Label style={styles.label}>Disease</Label>
                            <Input
                                onChangeText={(text) => this.setState({
                                    disease: text
                                })}
                                value={this.state.disease}
                            />
                        </Item>


                        <Item floatingLabel>
                            <Label style={styles.label}>Medication Provided</Label>
                            <Input
                                onChangeText={(text) => this.setState({
                                    medication: text
                                })}
                                value={this.state.medication}

                            />
                        </Item>


                        <Item floatingLabel >
                            <Label style={styles.label}>Cost</Label>
                            <Input
                                onChangeText={(text) => this.setState({
                                    cost: text
                                })}
                                value={this.state.cost}

                            />
                        </Item>

                        <DatePicker

                            style={{ width: 200, marginTop: 30 }}
                            date={this.state.date}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="2017-05-01"
                            maxDate="2018-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                                //       // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => { this.setState({ date: date }) }}
                        />

                        <Item
                            style={styles.buttonStyle}
                        >
                            <Button
                                onPress={this.saveData.bind(this)}
                                rounded
                                danger
                            >
                                <Text>
                                    Save
                           </Text>
                            </Button>
                        </Item>

                    </Form>

                </Content>

            </Container>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DataEntry)

const styles = {
    buttonStyle: {
        justifyContent: 'center',
        borderBottomWidth: 0,
        marginTop: 30
    },

    line: {
        marginTop: 30
    },
    label: {
        color: "#ECEFF1"
    }

}