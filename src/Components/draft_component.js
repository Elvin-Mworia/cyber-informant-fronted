import React,{Component,useState} from "react";
import {EditorState} from "draft-js"
import {Editor} from "react-draft-wysiwyg";
//import {render} from "react-dom";
import "./styles/richText.scss";



const RichText=()=>{
    const [state,setState]=useState( {editorState:EditorState.createEmpty()});

    const editorstateChange=(editorState)=>{
        setState(editorState);
    }
   const {editorState}=state;
    return(
        <div className="editor" style=
        {{position:"relative",display:"flex"}}>
             <Editor  className="text-editor"
        editorState={editorState}
        onEditorStateChange={editorstateChange}
        toolbar={{
            inline:{inDropdown:true},
            list:{inDropdown:true},
            textAlign:{inDropdown:true},
        link:{inDropdown:true},
        history:{inDropdown:true},
         
        }}/>
    </div>
    )
}
export default RichText;