import Actions from "../Actions/PatientAction"
import { AsyncStorage } from 'react-native';
var patientData = []

class Midware {
    static getAllPatient() {
        let newdata = []
        return (dispatch) => {
            AsyncStorage.getItem('sabih')
                .then((data) => {
                    let mydata = JSON.parse(data)
                    for (var i = 0; i < mydata.length; i++) {
                        newdata.push(mydata[i]);
                    }
                })
                .then(() => {
                    dispatch(Actions.getAllData(newdata))
                })
        }
    }

    static savePatientData(obj) {
        return (dispatch) => {
            patientData = []
            AsyncStorage.getItem('sabih')
                .then((data) => {
                    if (data !== null) {
                        let mydata = JSON.parse(data)
                        console.log(data, "data")
                        for (var i = 0; i < mydata.length; i++) {
                            patientData.push(mydata[i]);
                        }
                        patientData.push(obj)
                        AsyncStorage.setItem('sabih', JSON.stringify(patientData))
                            .then(() => {
                                dispatch(Actions.savePatientData())
                            })
                    }
                    else {
                        patientData.push(obj)
                        AsyncStorage.setItem('sabih', JSON.stringify(patientData))
                            .then(() => {
                                dispatch(Actions.savePatientData())
                            })
                        console.log('first time added')
                    }
                })
        }
    }

    static SearchPatientBYName(name) {
        return (dispatch) => {
            var newdata = []
            var findPatient = []
            var smallName = name.toLowerCase()
            console.log(smallName)
            AsyncStorage.getItem('sabih')
                .then((data) => {
                    let mydata = JSON.parse(data)
                    for (var i = 0; i < mydata.length; i++) {
                        newdata.push(mydata[i]);
                    }
                    newdata.map((obj) => {
                        var objName = obj.name.toLowerCase()
                        if (objName === smallName) {
                            let userFounded = {
                                name: obj.name,
                                disease: obj.disease,
                                cost: obj.cost,
                                date: obj.date,
                                medication: obj.medication,
                            }
                            findPatient.push(userFounded)
                        }
                    })
                    if (findPatient[0] === undefined) {
                        dispatch(Actions.noData())
                    }
                    else {
                        dispatch(Actions.searchPatientByName(findPatient))
                    }

                })
        }
    }

    static SearchPatientBYDate(date) {
        return (dispatch) => {
            var newdata = []
            var findPatient = []
            AsyncStorage.getItem('sabih')
                .then((data) => {
                    let mydata = JSON.parse(data)
                    for (var i = 0; i < mydata.length; i++) {
                        newdata.push(mydata[i]);
                    }
                    newdata.map((obj) => {
                        if (obj.date === date) {
                            let userFounded = {
                                name: obj.name,
                                disease: obj.disease,
                                cost: obj.cost,
                                date: obj.date,
                                medication: obj.medication,
                            }
                            findPatient.push(userFounded)
                        }
                    })

                    if (findPatient[0] === undefined) {
                        dispatch(Actions.noData())

                    }
                    else {
                        dispatch(Actions.searchPatientByDate(findPatient))
                    }
                })
        }
    }
}
export default Midware