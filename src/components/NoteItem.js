import React from "react";
import NoteItemBody from "./NoteItemBody";

function NoteItem({title, body, onDelete, id, createdAt}){
    return(
        <div className="note-item">
            <NoteItemBody createdAt={createdAt} title={title} body={body} />
            <button className="note-item_delete-button" onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}

export default NoteItem;