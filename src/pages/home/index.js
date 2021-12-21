import React, { Component } from "react";
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import { actionCreators } from "./store";
import { connect } from "react-redux";
import Writer from './components/Writer';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';

class Home extends Component {
    handleScrollTop(){
        window.scrollTo(0, 0)
    }

    render(){
        return (
        <HomeWrapper>
            <HomeLeft>
                <Topic />
                <List />
            </HomeLeft>
            <HomeRight>
                <Recommend />
                <Writer />
            </HomeRight>
            {this.props.scrollTop ? <BackTop onClick={this.handleScrollTop}><span className="iconfont spin">&#xe65d;</span></BackTop>: null}
        </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    };

    componentWillUnmount(){
        window.removeEventListener('scroll', this.props.changeScrollShow) //组件销毁时解绑，不影响其他
    }

    bindEvents(){
        window.addEventListener('scroll', this.props.changeScrollShow)
    };
};


const mapState = (state) => ({
    scrollTop: state.get('home').get('scrollTop')
})

const mapDispatch = (dispatch) => ({   //所有组件的reducer都能接收到
    changeHomeData(){
        dispatch(actionCreators.getHomeInfo())
    },
    changeScrollShow(){
        if (document.documentElement.scrollTop > 400){
            dispatch(actionCreators.getScrollTop(true));
        }else{
            dispatch(actionCreators.getScrollTop(false));
        }
    }
})

export default connect(mapState, mapDispatch)(Home);