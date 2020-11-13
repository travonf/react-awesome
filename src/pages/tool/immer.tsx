import React from 'react';
import produce from 'immer';

// const currentState = {
//   p: {
//     x: [2],
//   },
// };

// const o1 = produce(currentState, draftState => {
//   draftState.p.x = [2];
// });
// console.log(o1);

// function fn(o: typeof currentState) {
//   return produce(o, draftState => {
//     draftState.p.x = [3];
//   });
// }
// console.log(fn(currentState));

// const o4 = produce(currentState, draftState => {
//   draftState.p.x.push(4);
// });

// console.log(o4);

const producer = produce(draftState => {
  draftState.members[0].age++;
});
// const nextState = producer(currentState);

class Demo extends React.Component<any, any> {
  state = {
    members: [
      {
        name: 'ronffy',
        age: 20,
      },
      {
        name: 'other',
        age: 30,
      },
    ],
  };

  handleClick = () => {
    // 传统更新state的方式
    // const { members } = this.state;
    // this.setState({
    //   members: [
    //     {
    //       ...members[0],
    //       age: members[0].age + 1,
    //     },
    //     ...members.slice(1),
    //   ],
    // });

    // 用immer更新state
    this.setState(producer);
  };

  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state, null, 4)}</pre>
        <button
          onClick={this.handleClick}
          style={{
            color: 'black',
            cursor: 'pointer',
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Demo;
