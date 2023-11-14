import axios from "axios";
import { GET } from "./ActionType";
export const Get = () => async (dispatch) => {
  try {
    const res = await axios
      .get("http://192.168.2.14:4556/api/user/get")
      .then((res) => dispatch({ type: GET, payload: res.data }));
  } catch (error) {
    console.log(error);
  }

};
export const Add_user= (data)=> async(dispatch)=>{
    try {
        const res= await axios
            .post("http://192.168.2.14:4556/api/user/add",data)
            .then((res)=> dispatch(Get()))
    } catch (error) {
        console.log(error);
    }
}
export const Delete_user= (id)=> async(dispatch)=>{
    try {
        const res= await axios
            .delete("http://192.168.2.14:4556/api/user/delete/"+id)
            .then((res)=> dispatch(Get()))
    } catch (error) {
        console.log(error);
    }
}
export const Update_user= (id,data)=> async(dispatch)=>{
    try {
        const res= await axios
            .put("http://192.168.2.14:4556/api/user/update/"+id,data)
            .then((res)=> dispatch(Get()))
    } catch (error) {
        console.log(error);
    }
}
