import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../../api/auth'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SignIn extends Component {
    constructor (props) {
        super(props)
        
        this.state = {
            email: '',
            password: '',
            item: ''
        }
    }

    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })

    onSignIn = event => {
        event.preventDefault()
        
        const { history, setUser } = this.props

        signIn(this.state)
            .then(res => {
                setUser(res.data.user)    
            })
            .then(() => history.push('/'))
            .catch(() => {
                this.setState({ email: '', password: '' })
            })
    }

    render () {
        const { email, password } = this.state
        
        return (
            <div className="row center mb-4">
                <div className="col-sm-10 col-md-8 col-lg-6">
                    <h3>Sign In</h3>
                    <Form onSubmit={this.onSignIn}>
                        <Form.Group controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control 
                                requiredtype="email"
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
                                type="password"
                                placeholder="Password"
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

export default withRouter(SignIn)