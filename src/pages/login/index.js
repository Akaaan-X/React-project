import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { LoginBox, Input, Button, LoginTitle } from "./style";
import { actionCreators } from "./store";

class Login extends Component {
    render(){
        const { loggedin } = this.props;
        console.log(loggedin);
        if(!loggedin){
            return (
                <LoginBox>
                    <LoginTitle>登录</LoginTitle>
                    <Input placeholder="账号" ref={(input)=> {this.account=input}}/>
                    <Input placeholder="密码" type="password" ref={(input)=> {this.password=input}}/>
                    <Button onClick = {() => {this.props.login(this.account, this.password)}}>登录</Button>
                </LoginBox>
            )
        }else{
            return <Navigate to="/" />
        }
    }

};


const mapState = (state) => ({
    loggedin: state.getIn(['login','login'])
})

const mapDispatch = (dispatch) => ({
  login(accountElem, passwordElem){
    dispatch(actionCreators.login(accountElem.value, passwordElem.value))
  }
})

export default connect(mapState, mapDispatch)(Login);