import React from "react";
import firebase from 'firebase';

import DictList from '../containers/DictList';
import AddWordForm from '../containers/AddWordForm';

class Dictionary extends React.Component {
    constructor(props){
        super(props);
        var config = {
            
        };
        firebase.initializeApp(config);
    }
    
    render() {
        return (
            <div className="container">
                <h1>Dictionary</h1>
                <DictList data={firebase} />
                <AddWordForm data={firebase} />
            </div>
        );
    }
};

export default Dictionary;