import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Component = () => {
  const codeString = `
  class Promise {
    constructor(executor) {

      this.status = Promise.PENDING
      this.value = null
      this.reason = null

      try {
        executor(revolve, reject)
      } catch (e) {
        reject(e)
      }
    }

    then(onFulfilled, onRejected) {
      onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => { }
      onRejected = typeof onRejected === 'function' ? onRejected : () => { }

      if (this.status === Promise.FULFILLED) {

      }

      if (this.status === Promise.REJECTED) {

      }

      if (this.status === Promise.PENDING) {

      }
    }

    catch(onRejected) {
      this.then(_, onRejected)
    }
  }

  Promise.PENDING = 'pending'
  Promise.FULFILLED = 'fulfilled'
  Promise.REJECTED = 'rejected'
  `;
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default Component;
