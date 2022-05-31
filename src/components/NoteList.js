import React from "react";
import NoteItem from "./NoteItem";

function NoteList({note, onDelete}) {
    return(
        <div className="notes-list">
            {
                note.length === 0 ?
                (<h2> No Notes in Here !</h2>) :
                (note.map((note)=> 
                <NoteItem key={note.id} {...note} onDelete={onDelete}/>
                ))
            }
        </div>
    )
}

export default NoteList;
