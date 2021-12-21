import React, { Component } from "react";
import { WriterWrapper, WriterTitle, WriterRecom, WriterDetail } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

class Writer extends Component {
    render(){
        return (
        <WriterWrapper>
            <WriterTitle>推荐作者</WriterTitle>
            {this.props.writerList.map((item) => {
                return (
                    <WriterRecom key={item.get('id')}>
                        <img  className="writer-pic" src={item.get('imgUrl')} />
                        <WriterDetail>
                            <p className="name">{item.get('name')}</p>
                            <p className="follow">@ 关注</p>
                        </WriterDetail>
                        <WriterDetail>
                            <p className="detail">写了{item.get('number')}字 · {item.get('like')}k喜欢</p>
                        </WriterDetail>
                     </WriterRecom>
                )
            })}
        </WriterWrapper>
        )
    }
    componentDidMount() {
        this.props.changeWriterData()
    };
};

const mapState = (state) => ({
    writerList: state.get('home').get('writeName')
});

const mapDispatch = (dispatch) => ({
    changeWriterData(){
        dispatch(actionCreators.getWriterList())
    }
})

export default connect(mapState, mapDispatch)(Writer);