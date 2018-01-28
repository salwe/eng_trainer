import React from 'react';
import _ from 'lodash'

class DictList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: []
        };

        let app = this.props.data.database().ref('dictionary');
        app.on('value', snapshot => {
            this.GetData(snapshot.val());
        });
    }

    componentWillMount(){
        // let messagesRef = this.props.data.database().ref('dictionary');
        // messagesRef.keys()
        //     .map(messageKey => {
        //         let cloned = _.clone(messagesVal[messageKey]);
        //         cloned.key = messageKey;
        //         return cloned;
        //     })
        //     .value();

    }

    GetData(values) {
        let messagesVal = values;
        let messages = _(messagesVal)
            .keys()
            .map(messageKey => {
                let cloned = _.clone(messagesVal[messageKey]);
                cloned.key = messageKey;
                return cloned;
            })
            .value();
        this.setState({
            words: messages
        });
    }

    render() {
        let strings = <tr><td rowSpan="4">Loading...</td></tr>;
        
        if (this.state.words.length) {
            strings = this.state.words.map((el, idx) => {
                return(
                <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{el.word}</td>
                    <td>{el.translation}</td>
                    <td>{el.meaning}</td>
                </tr>
            );})
        }
        return (
            <table className="table table-inverse">
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                    {strings}
                </tbody>
            </table>
        );
    }
}

export default DictList;