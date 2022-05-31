import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../utils/index";
import NoteInput from "./NoteInput";
import "../styles/style.css";

class NoteApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddContactHandler = this.onAddContactHandler.bind(this);
    }

    onDeleteHandler(id){
        const notes = this.state.notes.filter(notes => notes.id !== id);
        this.setState({notes});
    }

    onAddContactHandler({title, body}){
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: +new Date(),
                    }
                ]
            }
        });
    }

    render() {
        return(
            <div className="note-app">
                <h1>Notes App</h1>
                <div className="note-app__body">
                    <div className="note-input">
                    <h2>Add Notes</h2>
                    <NoteInput addContact={this.onAddContactHandler}/>
                    </div>
                    <h2>Notes List</h2>
                    <NoteList note={this.state.notes} onDelete={this.onDeleteHandler} />
                </div>
            </div>
        );
    }
}

export default NoteApp;