import React, { Component, Fragment } from 'react'
// import { withRouter } from 'react-router-dom'

import { signUp } from '../../api/auth'

class SignUp extends Component {
    constructor (props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            passwordConfirmation: ''
        }
    }

    handlechange = event => this.setState({
        [event.target.name]: event.target.value
    })

    onSignUp = event => {
        event.preventDefault()

        const { history, setUser } = this.props

        signUp(this.state)
            .then(res => setUser(res.data.user))
            .then(() => history.push('/'))
            .catch(error => {
                this.setState({ email: '', password: '', passwordConfirmation: ''})
            })
    }

    render () {
        // const { email, password, passwordConfirmation } = this.state

        return (
            <Fragment>
                <h3>Sign Up</h3>
            </Fragment>
        )
    }
}

export default SignUp