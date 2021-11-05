import React from 'react';
import "./styles/createpost.scss";
import {useHistory} from 'react-router-dom'
function Createpost() {
    const history=useHistory();
    const submit=(e)=>{
        history.push('/');
        e.preventDefault();
}


    return (
        <div className="createpost">
            <h1>Create Post</h1>
            <form className='createpost-form' onSubmit={submit}>
                <label>Insert a Heading</label><br/>
                <input type="text" className="input-head" />
                <label>Add an Image(optional)</label><br/>
                <input type="file" src=""  className="input-image" placeholder="Pick Image"/>
                <label>Post content goes here</label>
                <textarea className="input-content" placeholder="write.."></textarea>
               <button type="submit" onClick={null} className="btn">Publish</button>
            </form>

            
        </div>
    )
}

export default Createpost;
