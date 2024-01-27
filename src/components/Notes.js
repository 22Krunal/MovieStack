import React, {useContext, useEffect, useRef, useState} from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useHistory } from 'react-router-dom';

const Notes = (props) => {
    const context = useContext(noteContext);
    const {notes, getNotes, editNote} = context; // Add 'addNote' and 'updateNote'
    const [loading, setLoading] = useState(true);
    const [platform, setPlatform] = useState('');
    const [genre, setGenre] = useState('');
  
    let history = useHistory();

       useEffect(() => {
           const fetchNotes = async () => {
               try {
                   if (localStorage.getItem('token')) {
                       await getNotes();
                       setLoading(false);
                   } else {
                       // Redirect to login page if there's no token
                       history.push("/login");
                   }
               } catch (error) {
                   console.error("Error fetching notes:", error);
                   setLoading(false);
               }
           };
           fetchNotes();
       }, []);

    const ref = useRef(null);
    const refClose = useRef(null);

    const [note, setNote] = useState( {id: "", etitle: "", edescription: "", elink: "", egenre : "", eplatform : ""})

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, elink: currentNote.link, egenre : currentNote.genre, eplatform : currentNote.platform })
        setPlatform(currentNote.platform)
        setGenre(currentNote.genre)
      }

    const handleClick = (e) => {
        editNote(note.id, note.etitle, note.edescription, genre, platform, note.elink)
        refClose.current.click();
        props.showAlert("Updated Successfully!" , "success");    }

    const onChange = (e) => {
        setNote({...note,[e.target.name]: e.target.value })
    }
    const handleDropdownChange = (event) => {
        // console.log("value--------->",event.target.innerText);
        setNote({...note, [event.target.name]: event.target.innerText})
        setPlatform(event.target.innerText);
        // setSelectedValue(event.target.innerText); // Update the state with the selected value
      };
      const handleDropdownChange1 = (event) => {
        // console.log("value--------->",event.target.innerText);
        setNote({...note, [event.target.name]: event.target.innerText})
        setGenre(event.target.innerText);
        // setSelectedValue(event.target.innerText); // Update the state with the selected value
      };
    return (
        <> 
        < AddNote showAlert={props.showAlert} /> 
        <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
        </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className="my-3">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input  type="text"  className="form-control" placeholder="Enter Title "  id="etitle"  name="etitle"  value={note.etitle}  aria-describedby="emailHelp"  required onChange={onChange}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <input  type="text"  className="form-control" placeholder="Enter Title description of movie"  id="edescription"  name="edescription"  value={note.edescription}  onChange={onChange} required/>
                            </div>
                            <div className="btn-group">
                <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    {platform || 'select Platfrom'}
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#" onClick={handleDropdownChange}>Netflix</a></li>
                    <li><a className="dropdown-item" href="#" onClick={handleDropdownChange}>Prime</a></li>
                    <li><a className="dropdown-item" href="#" onClick={handleDropdownChange}>Youtube</a></li>
                    <li><a className="dropdown-item" href="#" onClick={handleDropdownChange}>Hotstar</a></li>
                    <li><a className="dropdown-item" href="#" onClick={handleDropdownChange}>SonyLiv</a></li>
                    <li><a className="dropdown-item" href="#" onClick={handleDropdownChange}>Altbalaji</a></li>
                </ul>
                </div>
                <div className="btn-group mx-4">
                <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    {genre || 'select Genre'}
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#" onClick={handleDropdownChange1}>Comedy</a></li>
                    <li><a className="dropdown-item" href="#" onClick={handleDropdownChange1}>Horror</a></li>
                    <li><a className="dropdown-item" href="#" onClick={handleDropdownChange1}>Sci-fi</a></li>
                    <li><a className="dropdown-item" href="#" onClick={handleDropdownChange1}>Romantic</a></li>
                    <li><a className="dropdown-item" href="#" onClick={handleDropdownChange1}>Documentry</a></li>
                    <li><a className="dropdown-item" href="#" onClick={handleDropdownChange1}>Thriller</a></li>
                </ul>
                </div>
                            <div className="mb-3">
                                <label htmlFor="link" className="form-label">Link</label>
                                <input type="text" className="form-control" placeholder="Enter link" id="elink" name="elink" value={note.elink} onChange={onChange}  required/>
                            </div>

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button disabled={!note.etitle.length || !note.edescription.length} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="row my-3">
            <h2>Your Notes</h2>
            {/* <div className="container"> */}
            { loading ? (<p>Loading...</p>) : notes.length === 0 ? (<p>No notes to display</p>) : ( notes.map((note) => 
            <Noteitem key={note._id} note={note} updateNote={updateNote} showAlert={props.showAlert}/>))}
            {/* </div> */}

        </div>
    </>
    );
};

export default Notes;
