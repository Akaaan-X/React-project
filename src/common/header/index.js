import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import { actionCreators as loginActionCreatiors} from '../../pages/login/store';
import { 
  HeaderWrapper, 
  Logo, 
  Nav, 
  NavItem, 
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem, 
  SearchWrap, 
  Addition, 
  Button
   } from './style';

class Header extends Component {
  getSearchItem(){
    const {focus, list, page, totalPage, mouseEnter, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;
    const pageList = list.toJS();
    const newList = [];
    // 只有在接收了ajax数据之后才循环
    if(pageList){
      for(let i = (page-1) * 10; i < page * 10; i++){    //每页只显示10个标签
        if (pageList[i]){
          newList.push(
            <SearchInfoItem key={i}>{pageList[i]}</SearchInfoItem>
          )
        }
      }
    }
    
    if (focus || mouseEnter) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>
          <span className="iconfont spin"> 
          &#xe851;
          </span> 
          换一批
          </SearchInfoSwitch>
        </SearchInfoTitle>
        <div>
          {newList}
        </div>
      </SearchInfo>
      )}else{
        return null;
      }
  }  

    render(){
      const {focus, handleFocus, handleBlur, list, login, logout} = this.props;
      return (
        <HeaderWrapper>
          <Link to='/'>
          <Logo />
          </Link>
          <Nav>
            <NavItem className='left active' href='/'>发现</NavItem>
            <NavItem className='left'>下载App</NavItem>
            {
              login ? <NavItem onClick={logout} className='right'>退出</NavItem> : 
              <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
            }
            <NavItem className='right'>Aa</NavItem>
            <SearchWrap>
              <NavSearch
                className={focus ? 'focus' : ''}
                onFocus={() => handleFocus(list)}
                onBlur={handleBlur}
              ></NavSearch>
              <span className={focus ? 'focus iconfont zoom' : 'iconfont zoom'}>&#xe6e4;</span>
              {this.getSearchItem()}
            </SearchWrap>
          </Nav>
          <Addition>
            <Link to='/writer'>
            <Button className='writing'><span className="iconfont">&#xe600;</span>写文章</Button>
            </Link>
            <Button className='reg'>注册</Button>
          </Addition>
        </HeaderWrapper>
      )
    }
}




const mapStateToProps = (state) => {
  return {
    focus: state.get('header').get('focus'),   //由于已经增加了一层结构“header”。所以要增加header，immutable需要用get方法
          //or state.getIn(['header', 'focus'])
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseEnter: state.getIn(['header', 'mouseEnter']) ,
    login: state.getIn(['login','login'])     
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus(list){
      (list.size === 0) && dispatch(actionCreators.getList()); //Ajax返回list, 通过获取list大小避免重复请求
      dispatch(actionCreators.handleStateFocus())  //使用actionCreators来整合actions
    },
    handleBlur(){
      dispatch(actionCreators.handleStateBlurs())
    },
    handleMouseEnter(){
      dispatch(actionCreators.handleMouseEnter())
    },
    handleMouseLeave(){
      dispatch(actionCreators.handleMouseLeave())
    },
    handleChangePage(page, totalPage){
      // let originAngle = spin.style.transform.replace(/[^0-9]/ig, ''); //将非0-9的数字替换为空，取得纯数字值
      // if(originAngle){
      //   originAngle = parseInt(originAngle, 10)
      // }else{
      //   originAngle = 0
      // };
      // spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      if (page < totalPage){
        dispatch(actionCreators.handleChangePage(page + 1))  //需要在action中修改，不能改reducer
      }else{
        dispatch(actionCreators.handleChangePage(1))
      }
    },
    logout(){
      dispatch(loginActionCreatiors.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);