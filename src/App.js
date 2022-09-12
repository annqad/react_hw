import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      count: 0,
      isRunning: true,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState((prevProps, prevState) => ({
      date: new Date(),
      count: prevState.count + 1,
    }));
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  handleToggle = () => {
    const { isRunning } = this.state;

    isRunning ? clearInterval(this.timerID) : this.timerID = setInterval(() => this.tick(), 1000);
    this.setState({
      isRunning: !isRunning,
    });
  }

  render() {
    const { date, isRunning } = this.state;

    return (
      <div>
        <h1>hello world!</h1>
        <h2>now {date.toLocaleTimeString()}</h2>
        <button onClick={this.handleToggle}>{isRunning ? 'Stop' : 'Start'}</button>
      </div>
    )
  }

}

export default App;
