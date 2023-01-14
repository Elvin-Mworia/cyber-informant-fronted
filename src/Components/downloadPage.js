import React,{useState,useContext,useEffect} from "react";
import axios from "axios";
import {usercontext} from "./Context/UserContext.js";




function DownloadPage(){
    const [list,setList]=useState([]);
    const [books,setBooks]=useState([]);
    const {user}=useContext(usercontext);
    var idList=[];
    useEffect(()=>{
        axios.get("http://localhost:3001/productBought/user",{user:user.username}).then((res)=>{
            setList(res.data);
            list.map((a)=>{
                return  idList.push(a.product_id);
          })
        }).then(()=>{
            idList.map((a)=>{
            return  axios.get("http://localhost:3001/resources/book",a).then((res)=>{
                    setBooks.push(res.data);

                })
            })
        })
    })

return(

<div>
{/* {books ?     <p>Fetching your resources </p> :<p>Ooops!Looks like you will have to visit the resource page first.</p>} */}
{books.map((a,key)=>{
return(
    <p>{a.name}</p>
)
})}
</div>
)


}
export default DownloadPage;