import styled from 'styled-components';
import logoPic from '../../static/logo.png';

// 带样式的div标签
export const HeaderWrapper = styled.div` 
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
    background-color:#fff
`;

export const Logo = styled.div` 
    position: absolute;
    top: 0;
    left: 30px;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});  /* 引入图片的方式*/
    background-size: 100px 56px;
`

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    background-color:#fff
`

export const NavItem = styled.a`
    &.left{
        float: left;
    }
    &.right{
        float: right;
        color: #969696;
    }
    &.active{
        color: #ea6f5a;
    }
    text-decoration: none;
    line-height: 56px;
    margin: 0 15px;
    color: #333;
    font-size: 17px;
    cursor: pointer;
    background-color:#fff;
`
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 35px 0 20px;
    box-sizing: border-box;
    margin-top: 9px;
    margin-left: 20px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #777;
    transition: all 0.3s ease-out;
    &.focus{
        width: 240px;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background: #fff
`;

export const SearchInfoTitle= styled.div`
    margin: 20px 0 15px 0;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
    background-color:#fff
`;

export const SearchInfoSwitch= styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin{
        display: block;
        float:left;
        font-size: 12px;
        margin-right: 2px;
        transition: all, .2s, ease-in;
        transform-origin: center center;
    }
`;

export const SearchInfoItem= styled.a`
    diplay:block;
    float:left;
    margin-left: 10px;
    margin-bottom: 10px;
    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    border: 1px solid #ddd;
    border-radius: 3px;
    color: #333;
    cursor: pointer
`;

export const SearchWrap = styled.div`
    position: relative;
    float:left;
    background-color:#fff;
    .zoom{
        position:absolute;
        right:10px;
        bottom: 4px;
        width:30px;
        border-radius:15px;
        line-height:30px;
        text-align: center;
        color: #969696;
        font-size: 20px;
        &.focus{
            background-color: #777;
            color:#fff
        }
    }
`

export const Addition = styled.div`
    position: absolute;
    top: 0;
    right: 10px;
    height: 56px;
    background-color:#fff
`

export const Button = styled.a`
    line-height: 38px;
    margin: 9px 0 10px 10px;
    padding: 0 20px;
    float: right;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    cursor: pointer;
    &.reg{
        color: #ec6149;
    }
    &.writing{
        color: #fff;
        background-color: #ec6149;
    }
`