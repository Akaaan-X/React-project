import styled from "styled-components";

export const WriteWrapper = styled.div`
    overflow: hidden;
    width: 1000px;
    margin: 60px auto;
    padding-top: 50px;
    background: #fff;
    box-shadow: 0 0 8px rgb(0 0 0 / 10%);
    label{
        display: block;
        margin-left: 108px;
        margin-top: 30px;
        font-size: 14px;
        color: #777
    }
`;

export const InputTitle = styled.input`
    display: block;
    width: 600px;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    margin: 10px 0 10px 100px;
    color: #969696;
    border: 1px solid #c8c8c8;
    border-radius: 4px;
`;

export const InputContent = styled.textarea`
    display: block;
    line-height: 30px;
    padding: 0 10px;
    margin: 10px 0 10px 100px;
    color: #969696;
    border: 1px solid #c8c8c8;
    border-radius: 4px;
    width: 600px;
    height: 300px;
`;

export const Button = styled.div`
    width: 220px;
    height: 30px;
    line-height: 30px;
    background: #3194d0;
    border-radius: 15px;
    margin:20px 0 30px 120px;
    text-align: center;
    color: #fff;
    cursor: pointer;
`;