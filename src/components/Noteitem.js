import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"


const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
     function watch(link){
        window.location.replace(link);
    }    
    return (
    //     <div className="col-md-3 ">
    //         <div className="card my-3">                
    //             <div class="col-md-8">
    //             <div className="card-body">
    //                 <div className="d-flex align-items-center">
    //                     <h5 className="card-title">{note.title}</h5>
    //                     <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id); props.showAlert("Deleted Successfully!" , "success"); }}></i>
    //                     <i className="far fa-edit mx-2" onClick={()=>{updateNote(note);  }}></i>
    //                     <p className="card-text">{note.description}</p>
    //                 </div>
    //                 </div>
    //                 <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
    // {note.genre}
    // <span class="visually-hidden">unread messages</span>
    // </span>
    //             </div>
    //         </div>
    //     </div>
//         <div className="col-md-3 card mb-3">
//   <div className="row g-0">
//     <div className="col-md-4">
//       <img src="..." className="img-fluid rounded-start" alt="..."/>
//     </div>
//     <div className="col-md-8">
//       <div className="card-body">
//         <h5 className="card-title">{note.title}</h5>
//         <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id); props.showAlert("Deleted Successfully!" , "success"); }}></i>
//         <i className="far fa-edit mx-2" onClick={()=>{updateNote(note);  }}></i>
//       <p className="card-text">{note.description}</p>
//       </div>

//     </div>
//   </div>
// </div>
<div className="col-md-5 ">
<div className="card text-center" >
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id); props.showAlert("Deleted Successfully!" , "success"); }}></i>
       <i className="far fa-edit mx-2" onClick={()=>{updateNote(note);  }}></i>
    <p className="card-text">{note.description}</p>
  </div>
  <ul className="list-group list-group-flush">
    {/* <li className="list-group-item">{note.genre}</li> */}
    <li className="list-group-item">{note.platform}</li>
  </ul>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
     {note.genre}
     <span class="visually-hidden">unread messages</span>
     </span>
  <div className="card-body">
  {/* <button type="button" class="btn btn-primary" onClick={()=>{watch(note.link)}}>Watch</button> */}
    <a href={note.link} target ="_blank" rel = "noopener noreferrer" className="card-link">Watch</a>
    {/* <a href={note.link} target="_blank" rel="noopener noreferrer">
  {note.link}
</a> */}
  </div>
</div>
</div>
    )
}
export default Noteitem