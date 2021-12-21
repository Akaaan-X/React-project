import styled from 'styled-components';
import bannerOne from '../../static/banner-8.png';
import bannerTwo from '../../static/banner-7.png';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    float: left;
    width: 625px;
    margin-left: 15px;
    padding-top: 10px;
`;

export const HomeRight = styled.div`
    float: right;
    width: 280px;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    padding: 0 6px;
    margin-left: 18px;
    margin-bottom: 18px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #000;
    background: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    cursor: pointer;
`;

export const ListItem = styled.div`
    overflow: hidden;
    margin-top: 20px;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .list-pic{
        display:block;
        float:right;
        width: 150px;
        height: 100px;
        border-radius: 5px
    }
`;

export const ListInfo = styled.div`
    width: 400px;
    float: left;
    .title{
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .content{
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;

export const RecommendOne = styled.div`
    width: 280px;
    height: 50px;
    background: url(${bannerOne});
    background-size: contain;
`;

export const RecommendTwo = styled.div`
    width: 280px;
    height: 50px;
    margin-top: 10px;
    background: url(${bannerTwo});
    background-size: contain;
`;

export const WriterWrapper = styled.div`
    width: 278px;

`;

export const WriterTitle = styled.div`
    width: 280px;
    border-bottom: 1px solid #dcdcdc;
    height: 19.98px;
    line-height: 19.98px;
    font-size: 14px;
    color: #969696
`;

export const WriterRecom = styled.div`
    float: left;
    width: 280px;
    height: 60px;
    .writer-pic{
        display:block;
        float: left;
        margin-top: 10px;
        width: 48px;
        height: 48px;
        background: contain;
        border-radius: 50%
    }
`;

export const WriterDetail = styled.div`
    float: right;
    width: 227px;
    height: 20px;
    margin-left: 5px;
    .name{
        display: block;
        float: left;
        margin-top: 20px;
        font-size: 14px;
    }  
    .follow{
        display: block;
        float: right;
        margin-top: 20px;
        font-size: 14px;
        color: #42c02e
    }
    .detail{
        display: block;
        float: left;
        margin-top:20px;
        font-size: 12px;
        color: #969696
    }
`;

export const LoadMore = styled.div`
    width: 100%;
    margin: 20px 0;
    height: 40px;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 50px;
    bottom: 30px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px solid #ccc;
    cursor: pointer;
`;

