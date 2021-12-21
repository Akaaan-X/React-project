import styled from "styled-components";

export const LoginBox = styled.div`
    overflow: hidden;
    width: 400px;
    margin: 80px auto;
    padding-top: 20px;
    background: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.1)
`;

export const LoginTitle = styled.div`
    width: 50px;
    margin:20px auto;
    height:30px;
    line-height: 30px;
    color: #ea6f5a;
    font-size: 18px;
    text-align: center;
    border-bottom: 1px solid #ea6f5a

`;

export const Input = styled.input`
    display: block;
    width: 200px;
    height: 40px;
    line-height: 30px;
    padding: 0 10px;
    margin: 10px auto;
    color: #777;
    border: 1px solid #c8c8c8;
    border-radius: 4px; 
`;

export const Button = styled.div`
    width: 220px;
    height: 30px;
    line-height: 30px;
    background: #3194d0;
    border-radius: 15px;
    margin: 40px auto;
    text-align: center;
    color: #fff;
    cursor: pointer;
`;