class Actions {

    static getdata = "getData"
    static saveData = "saveData"
    static userSignup = "userSignup"
    static searchByName = "searchByName"
    static searchByDate = "searchByDate"
    static emptyData = "emptyData"

    static getAllData(value) {
        return {
            type: Actions.getdata,
            data: value
        }
    }


    static savePatientData() {
        return {
            type: Actions.saveData
        }
    }



    static createUser() {
        return {
            type: Actions.userSignup
        }
    }



    static searchPatientByName(value) {
        return {
            type: Actions.searchByName,
            data: value
        }
    }

    static searchPatientByDate(value) {
        return {
            type: Actions.searchByDate,
            data: value
        }
    }


    static noData() {
        return {
            type: Actions.emptyData
        }
    }


}
export default Actions