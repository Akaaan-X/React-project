import axios from 'axios';

const changeLogin = () => ({
    type:'change_login',
    value: true
})

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password' + password).then((res)=>{
            const result = res.data.data;
            if(result){
                dispatch(changeLogin());
            }else{
                alert("登陆失败")
            }
        })
    }
}

export const logout = () => ({
    type: 'change_logout',
    value: false
})