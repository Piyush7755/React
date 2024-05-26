import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "./utils";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            errorMessage: ''
        };
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    register = () => {
        
        axios.post('http://localhost:9000/register', {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }).then((res) => {
            alert(res.data);
            this.props.navigate("/");
        }).catch((err) => {
            if (err.response && err.response.data && err.response.data) {
                this.setState({ errorMessage: err.response.data});
            } else {
                this.setState({ errorMessage: 'An error occurred while processing your request.' });
            }
        });
    }


    render() {
        return (
            <div style={{ marginTop: '200px' }}>
                <div>
                    <h2>Register</h2>
                </div>

                <div>
                    <input
                        type="text"
                        autoComplete="off"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        placeholder="User Name"
                        required
                    />
                    <br/><br/>
                    <input
                        type="text"
                        autoComplete="off"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        placeholder="Email"
                        required
                    />
                    <br/><br/>
                    <input
                        type="password"
                        autoComplete="off"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        placeholder="Password"
                        required
                    />
                   
                    <br/><br/>
                    <input
                        type="text"
                        autoComplete="off"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.onChange}
                        placeholder="First Name"
                        required
                    />
                    <br/><br/>
                    <input
                        type="text"
                        autoComplete="off"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.onChange}
                        placeholder="Last Name"
                        required
                    />
                    <br/><br/>
                    <button
                        className="button_style"
                        onClick={this.register}
                        disabled={this.state.username === '' || this.state.password === '' || this.state.email==='' || this.state.firstName==='' || this.state.lastName==='' }
                    >
                        Register
                    </button>
                    <span style={{color: 'red'}}>{this.state.errorMessage}</span>
                    <br/><br/>
                    <button
                        onClick={() => {
                            this.props.navigate("/");
                        }}
                    >
                        Login
                    </button>
                </div>
            </div>
        );
    }
}

export default withRouter(Register);
