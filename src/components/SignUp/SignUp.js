import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp } from '../../api/auth'

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
                <Form onSubmit={this.onSignUp}>
                    <Form.Group controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            name="email"
                            value={email}
                            placeholder="enter email"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            name="password"
                            value="password"
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
                            onChange={this.handlechange}
                        />

                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                    >
                        Submit 
                    </Button> 
                </Form>
            </Fragment>
        )
    }
}

export default SignUp