import React, { Component } from "react";
import { DetailWrapper, Header, Content } from './style';
import { connect } from "react-redux";
import { actionCreators } from './store';

class Detail extends Component {
    render(){
        console.log(this.props);
        return (
        <DetailWrapper>
            <Header>{this.props.title}</Header>
            <Content dangerouslySetInnerHTML={{__html:this.props.content}} />
        </DetailWrapper>
        )
    }

    componentDidMount(){
        this.props.getDetailInfo()
    }
};


const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
     getDetailInfo(){
        return dispatch(actionCreators.addDetailInfo())
    }
})

export default connect(mapState, mapDispatch)(Detail);