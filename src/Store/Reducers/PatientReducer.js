import Actions from "../Actions/PatientAction"

const initialState = {
    getAllData: [],
    getAllPatient: false,
    savePatientRecord: false,
    createAccount: false,
    searchByName: false,
    searchedPatientByName: [],
    searchByDate: false,
    searchedPatientByDate: [],
    dataEmpty: true,
}

function Reducer(state = initialState, action) {
    switch (action.type) {

        case Actions.getdata:
            return Object.assign({}, state, { getAllPatient: true, getAllData: action.data })


        case Actions.saveData:
            return Object.assign({}, state, { savePatientRecord: true })


        case Actions.userSignup:
            return Object.assign({}, state, { createAccount: true })


        case Actions.searchByName:
            return Object.assign({}, state, { searchByName: true, dataEmpty: false, searchedPatientByName: action.data })


        case Actions.searchByDate:
            return Object.assign({}, state, { searchByDate: true, dataEmpty: false, searchedPatientByDate: action.data })


        case Actions.emptyData:
            return Object.assign({}, state, { dataEmpty: true, searchedPatientByName: [], searchByName: false, searchedPatientByDate: [], searchByDate: false })


        default:
            return state;
    }
};


export default Reducer