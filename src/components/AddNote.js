import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext"
const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;
    const [note, setNote] = useState({title: "", description: "", genre: "", platform : "", link : ""});
    const [platform, setPlatform] = useState('');
    const [genre, setGenre] = useState('');
   
    const handleClick = (e)=>{
        e.preventDefault();
        console.log(platform);
        addNote(note.title, note.description, genre, platform, note.link);
        setNote({title: "", description: "", genre: "", platform : "", link : ""});
        setPlatform("");
        setGenre("");
        props.showAlert("Note added Successfully!" , "success");
    }
    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    const [selectedValue, setSelectedValue] = useState(''); // State to store the selected value

    const handleDropdownChange = (event) => {
      console.log("value--------->",event.target.innerText);
      setNote({...note, [event.target.name]: event.target.innerText})
      setPlatform(event.target.innerText);
      // setSelectedValue(event.target.innerText); // Update the state with the selected value
    };
    const handleDropdownChange1 = (event) => {
      console.log("value--------->",event.target.innerText);
      setNote({...note, [event.target.name]: event.target.innerText})
      setGenre(event.target.innerText);
      // setSelectedValue(event.target.innerText); // Update the state with the selected value
    };
    return (
        <div className="mainform my-5">
        <div className="container my-3" >
            <h2>Add a Note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" placeholder="Enter Title " id="title" name="title" aria-describedby="emailHelp"  value={note.title} onChange={onChange} minLength={5} required/> 
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label" >Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required  placeholder="Enter Description"/>
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
                    <input type="text" className="form-control" id="link" name="link" value={note.link} onChange={onChange} minLength={5} required placeholder="Enter a Link" />
                </div>
                <button disabled={!note.title.length || !note.description.length} type="submit" id="formkibutton" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
        </div>
    )
}
export default AddNote