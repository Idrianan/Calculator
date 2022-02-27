import React, {Component} from 'react';
import Button from './Button';
import './Calculator.css';
import Display from './Display';
import Keypad from './Keypad';

class Calculator extends Component {
    constructor() {
        super();
        this.state = { data: '', prev_data: '', comp: ''}
    }


    calculate = () => {
        if (this.state.prev_data===''){
            this.state.prev_data="0";
        }
        try {
            let result;
            switch (this.state.comp){
                case '/':
                    result = (parseFloat(this.state.prev_data)/parseFloat(this.state.data)).toString();
                    this.setState({data: result, prev_data: '', comp: ''});
                    break;
                case '*':
                    result = (parseFloat(this.state.data)*parseFloat(this.state.prev_data)).toString();
                    this.setState({data: result, prev_data: '', comp: ''});
                    break;
                case '+':
                    result = (parseFloat(this.state.data)+parseFloat(this.state.prev_data)).toString();
                    this.setState({data: result, prev_state: '', comp: ''});
                    break;
                case '-':
                    result = (parseFloat(this.state.prev_data)-parseFloat(this.state.data)).toString();
                    this.setState({data: result, prev_data: '', comp: ''});
                    break;
            }
        } catch (e) {
            this.setState({data: 'error'})
        }
    }
    handleKeyPress = (event) => {
        let digits = ["0","1","2","3","4","5","6","7","8","9"]
        let prev = this.state.data
        if (event.key in digits){
            this.setState({ data: this.state.data + event.key});
        }
        switch(event.key) {
            case '/':
                this.setState({ data: '', prev_data: prev, comp: '/'});
                break;
            case '*':
                this.setState({ data: '', prev_data: prev, comp: '*'});
                break;
            case '+':
                this.setState({ data: '', prev_data: prev, comp: '+'});
                break;
            case '-':
                this.setState({ data: '', prev_data: prev, comp: '-'});
                break;
            case '=':
                this.calculate();
                break;
        }
    }

    handleClick = e => {
        const value = e.target.getAttribute('data-value');
        let prev = this.state.data
        switch(value) {
            case '/':
                this.setState({ data: '', prev_data: prev, comp: '/'});
                break;
            case '*':
                this.setState({ data: '', prev_data: prev, comp: '*'});
                break;
            case '+':
                this.setState({ data: '', prev_data: prev, comp: '+'});
                break;
            case '-':
                this.setState({ data: '', prev_data: prev, comp: '-'});
                break;
            case 'clear':
                this.setState({ data: ''});
                break;
            case 'equal':
                this.calculate();
                break;
            default:
                this.setState({ data: this.state.data + value});
        }
    }
    render(){
        document.addEventListener("keydown",this.handleKeyPress)
        return(
            <div className="Calculator">
                <Display data={this.state.data}/>
                <Keypad>
                    <Button onClick={this.handleClick} label="C" value="clear" />
                    <Button onClick={this.handleClick} label="7" value="7" />
                    <Button onClick={this.handleClick} label="4" value="4" />
                    <Button onClick={this.handleClick} label="1" value="1" />
                    <Button onClick={this.handleClick} label="0" value="0" />

                    <Button onClick={this.handleClick} label="/" value="/" />
                    <Button onClick={this.handleClick} label="8" value="8" />
                    <Button onClick={this.handleClick} label="5" value="5" />
                    <Button onClick={this.handleClick} label="2" value="2" />
                    <Button onClick={this.handleClick} label="." value="." />

                    <Button onClick={this.handleClick} label="x" value="*" />
                    <Button onClick={this.handleClick} label="9" value="9" />
                    <Button onClick={this.handleClick} label="6" value="6" />
                    <Button onClick={this.handleClick} label="3" value="3" />
                    <Button onClick={this.handleClick} label="" value="null" />

                    <Button onClick={this.handleClick} label="-" value="-" />
                    <Button onClick={this.handleClick} label="+" size="2" value="+" />
                    <Button onClick={this.handleClick} label="=" size="2" value="equal" />
                </Keypad>
            </div>
        );
    }
}

export default Calculator;