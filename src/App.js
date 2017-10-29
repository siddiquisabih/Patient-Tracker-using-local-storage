import React, { Component } from "react"
import { Container, Text, Root } from "native-base"

import Stack from "../src/navigation/stack"

import { Provider } from "react-redux"
import Store from "./Store/index"


class App extends Component {
    render() {
        return (

            <Provider store={Store}>
                <Root>

                    <Stack />
                </Root>
            </Provider>
        )
    }
}
export default App