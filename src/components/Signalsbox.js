import React, { Component } from 'react';
import Item from './Item';
import Button from './Button';

class SignalsBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channel: 'spanishchannel29',
            filter: 'lobowass',
            //data : respuesta.filter(message => message.messageSenderUserName === 'christianramosevo')
            data: []
        }
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }

    componentWillMount() {
        setInterval(this.getData(), 2000);
    }

    getData = () => {
        fetch('https://golive.im/previouslivechat/' + this.state.channel)
            .then(response => response.json())
            .then(response => {
                if (this.state.filter !== '') {
                    this.setState({ data: response.filter(x => x.messageSenderUserName === this.state.filter) });
                } else {
                    this.setState({ data: response});
                }
                
            });

        //this.setState({data: respuesta});  
    }

    _remove(position) {
        let { data } = this.state;

        let newData = [
            ...data.slice(0, position),
            ...data.slice(position + 1),
        ]
        this.setState({ data: newData });
    }

    _add() {
        let { data } = this.state;
        let newData = [
            ...data,
            {
                image: "",
                name: "",
                portion: "",
                price: 0
            }
        ]
        this.setState({ data: newData });
    }

    render() {
        return (
            <div className="app">
                <h1>Señales de {this.state.channel}</h1>
                <ul className="todo-list">
                    {
                        this.state.data.map(
                            (item, index) =>
                                <Item data={item} key={index} onRemove={() => this._remove(index)} />
                        )
                    }
                </ul>
                <div className="footer">
                    <Button
                        onClick={this._add.bind(this)}
                        name="+ Campos"
                    />
                </div>
            </div>
        )
    }
}

export default SignalsBox;