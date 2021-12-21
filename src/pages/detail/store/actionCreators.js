import axios from "axios";

const getDetailInfo = (result) => ({
    type: 'add_detail_info',
    title: result.title,
    content: result.content
})

export const addDetailInfo = () => {
    return (dispatch)=>{
        axios.get('/api/detailList.json').then((res)=> {  //把id接口传给后端
            const result = res.data.data;
            return dispatch(getDetailInfo(result))
        })
    }
   
}