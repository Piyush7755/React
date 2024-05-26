import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "./utils";
import { setCookie } from "./Cookie";
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

     login = () => {
        const payload = {
            username: this.state.username,
            password: this.state.password,
        };

        console.log("Payload -> "+payload.userName);

        const headers = {};

        axios.post('http://localhost:9000/login', payload, {headers})
            .then((res) => {
            
            
            localStorage.setItem('username', this.state.username);
            setCookie("username",this.state.username,1)
            this.props.navigate("/WelcomePage");
        }).catch((err) => {
                alert(err);
            
        });
    }


    render() {
        return (
            <div style={{ marginTop: '200px' }}>
                <div>
                    <h2>Login</h2>
                </div>

                <div>
                    <input
                        type="text"
                        autoComplete="off"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        placeholder="Username"
                        required
                    />
                    <br /><br />
                    <input
                        type="password"
                        autoComplete="off"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        placeholder="Password"
                        required
                    />
                    <br /><br />
                    <button
                        className="button_style"
                        onClick={this.login}
                        disabled={this.state.username === '' || this.state.password === ''}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => {
                            this.props.navigate("/register");
                        }}
                    >
                        Register
                    </button>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);
