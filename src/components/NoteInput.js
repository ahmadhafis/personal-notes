import React from "react";

class NoteInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: '',
            body: ''
        }

        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onNameChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                title: event.target.value,
            }
        });
    }

    onTagChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                body: event.target.value,
            }
        });

    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addContact(this.state);
    }

    render() {
        return(
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <input className="note-input__title" type='text' placeholder="Title" value={this.state.title} onChange={this.onNameChangeEventHandler} required />
                <textarea className="note-input__body" type='text' placeholder="Body" value={this.state.body} onChange={this.onTagChangeEventHandler} required></textarea>
                <button type="submit"> Add </button>
            </form>
        )
    }
}

export default NoteInput;