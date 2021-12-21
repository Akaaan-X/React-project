import React, { Component } from "react";
import { RecommendWrapper, RecommendOne, RecommendTwo } from '../style';

class Recommend extends Component {
    render(){
        return (
        <RecommendWrapper>
            <RecommendOne></RecommendOne>
            <RecommendTwo></RecommendTwo>
        </RecommendWrapper>
        )
    }
};

export default Recommend;