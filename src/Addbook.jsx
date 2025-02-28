import React  from "react";
import './Addbook.css'
function Addbook(){
    return(
        <div className="container">
            <div className="form">
            <label>Title</label>
            <input type="text" />
            
            <label>Author</label>  
            <input type="text" />
            
            <label>Description</label>
            <textarea></textarea> 
            
            <label>Cover Image URL</label>
            <input type="url" />
            <button className="submit">Submit</button>
            </div>
        </div>
    )
}

export default Addbook;