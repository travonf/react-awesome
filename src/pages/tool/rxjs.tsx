import React from 'react';
import { interval, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

class Timer extends React.Component {
  state = {
    val: 0,
  };

  subscription = new Subscription();

  componentDidMount() {
    const sub = interval(1000).pipe(tap(val => this.setState({ val })));
    this.subscription.add(sub);
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    return <h1>{this.state.val}</h1>;
  }
}

Timer.menu = { name: 'Rxjs' };

export default Timer;
