import React, { Component, Fragment } from 'react'
// import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SignUp extends Component {
    constructor (props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            passwordConfirmation: ''
        }
    }

    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })

    onSignUp = event => {
        event.preventDefault()

        const { msgAlert, history, setUser } = this.props

        signUp(this.state)
            .then(() => signIn(this.state))
            .then(res => setUser(res.data.user))
            .then(() => msgAlert({
                heading: 'Sign Up Success',
                message: messages.signUpSuccess,
                variant: 'success'
            }))
            .then(() => history.push('/'))
            .catch(error => {
                this.setState({ email: '', password: '', passwordConfirmation: ''})
                msgAlert({
                    heading: 'Sign Up Failed with error: ' + error.message,
                    message: messages.signUpFailure,
                    variant: 'danger'
                })
            })
    }

    render () {
        const { email, password, passwordConfirmation } = this.state

        return (
            <div>
            <div>
                <h3>Sign Up</h3>
                <Form onSubmit={this.onSignUp}>
                    <Form.Group controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Enter email"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            name="password"
                            value={password}
                            placeholder="Password"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="passwordConfirmation">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control
                            required
                            name="passwordConfirmation"
                            value={passwordConfirmation}
                            type="password"
                            placeholder="ConfirmPassword"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                    >
                        Submit 
                    </Button> 
                </Form>
            </div>
            </div>
        )
    }
}

export default SignUp