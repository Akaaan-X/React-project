import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { WriteWrapper, InputTitle, InputContent, Button } from "./style";

class Writer extends Component {
    render(){
        const { loggedin } = this.props;
        if(loggedin){
            return (
                <WriteWrapper>
                    <label>文章标题</label>
                    <InputTitle placeholder="标题"/>
                    <label>文章内容</label>
                    <InputContent placeholder="请输入内容..."/>
                    <Button>发布</Button>
                </WriteWrapper>
            )
        }else{
            return <Navigate to="/login" />
        }
    }

};


const mapState = (state) => ({
    loggedin: state.getIn(['login','login'])
})

const mapDispatch = (dispatch) => ({
 
})

export default connect(mapState, mapDispatch)(Writer);