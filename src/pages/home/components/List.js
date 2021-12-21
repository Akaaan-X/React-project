import React, { Component } from "react";
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from "react-router-dom";

class List extends Component {
    render() {
        const { listItem } = this.props;
        return (
            <div>
            {listItem && listItem.map((item) => {
                return (
                    <Link key={item.get('id')} to={'/detail/' + item.get('id')}>  
                    <ListItem>
                        <img className='list-pic' src={item.get('imgUrl')} alt=''/>
                        <ListInfo>
                                <h3 className='title'>{item.get('title')}</h3>
                                <p className='content'>{item.get('content')}</p>
                        </ListInfo>
                    </ListItem>
                    </Link>
                )
            })} 
            <LoadMore onClick={this.props.getMoreItem}>阅读更多</LoadMore>  
            </div>  
        )
    }
};

const mapState = (state) => ({
    listItem: state.get('home').get('listItem')
});

const mapDispatch = (dispatch) => ({
    getMoreItem(){
        dispatch(actionCreators.getMoreList());
    }
})

export default connect(mapState, mapDispatch)(List);