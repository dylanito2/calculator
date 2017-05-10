import React, { Component } from 'react';


import Display from './components/Display'
import ButtonPad from './components/ButtonPad'
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      firstOperand: '',
      operator: '',
      secondOperand: '',
      answer: false
    }
    this.appendValue = this.appendValue.bind(this)
    this.appendToFirstOperand = this.appendToFirstOperand.bind(this)
    this.appendToSecondOperand = this.appendToSecondOperand.bind(this)
    this.addOperator = this.addOperator.bind(this)
    this.calculate = this.calculate.bind(this)
    this.clear = this.clear.bind(this)
  }

  clear() {
    this.setState({
      firstOperand: '',
      operator: '',
      secondOperand: '',
      answer: false
    })
  }

  appendValue(value) {
    if (this.state.operator === '') {
      if (this.state.firstOperand.length > 10) {
        return
      }
      this.appendToFirstOperand(value)
    } else {
      if (this.state.secondOperand.length > 10) {
        return
      }
      this.appendToSecondOperand(value)
    }
  }

  appendToFirstOperand(value) {
    value = value.toString()
    if (this.state.firstOperand === 'err') {
      this.setState({
        firstOperand: value
      })
    } else if (!this.state.answer) {
      this.setState({
        firstOperand: this.state.firstOperand + value
      })
    }
    else {
      this.setState({
        firstOperand: value,
        answer: false
      })
    }
  }


  appendToSecondOperand(value) {
    this.setState({
      secondOperand: this.state.secondOperand + value
    })
  }

  addOperator(value) {
    if (this.state.secondOperand !== '') {
      this.calculate()
      this.setState({
        operator: value
      })
    }
    else if (this.state.operator === '' && this.state.firstOperand !== '') {
      this.setState({
        operator: value
      })
    }
  }

  calculate() {
    let answer
    let first = parseFloat(this.state.firstOperand, 10)
    let second =  parseFloat(this.state.secondOperand , 10)
    switch (this.state.operator) {
      case '+':
      answer = first + second
      break;
      case '-':
      answer = first - second
      break;
      case '*':
      answer = first * second
      break;
      case '÷':
      answer = first / second
      break;
      default:
      answer = 'err'
    }

    this.setState({
      firstOperand: answer.toString(),
      operator: '',
      secondOperand: '',
      answer: true
    })
  }

  render() {
    return (
      <div id='l-main'>
        <div className="calc">
          <Display firstOperand={this.state.firstOperand} secondOperand={this.state.secondOperand} />
          <ButtonPad appendValue={this.appendValue} addOperator={this.addOperator} clear={this.clear} calculate={this.calculate} />
        </div>
      </div>
    )
  }
}

export default App;
