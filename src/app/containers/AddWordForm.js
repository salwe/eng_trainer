import React from 'react';

class AddWordForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: {}
        }

    };

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    addWordToDB(e) {
        e.preventDefault();
        console.log(this.state);
        //return;
        let dbCon = this.props.data.database().ref('/dictionary');
        dbCon.push({
            ...this.state
        });
        this.setState({
            word: {}
        });
    }

    render() {
        return (
            <form onSubmit={(e)=>this.addWordToDB(e)}>
                <div className="form-group">
                    <label htmlFor="inpWord">Word</label>
                    <input id="inpWord" type="text" name="word" className="form-control" onChange={ (e)=> (this.handleInputChange(e)) } />
                </div>
                <div className="form-group">
                    <label htmlFor="inpTranslation">Translation</label>
                    <input id="inpTranslation" type="text"  name="translation" className="form-control"  onChange={ (e)=> (this.handleInputChange(e)) } />
                </div>
                <div className="form-group">
                    <label htmlFor="inpMeaning">Meaning</label>
                    <textarea id="inpMeaning" type="text"  name="meaning" className="form-control"  onChange={ (e)=> (this.handleInputChange(e)) } ></textarea>
                </div>
                <button type="submit">Add</button>
            </form>
        );
    }
}

export default AddWordForm;