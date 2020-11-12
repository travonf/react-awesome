import React from 'react';
import PropTypes from 'prop-types';
import ReactDiffViewer from 'react-diff-viewer';
import oldCode from './oldCode';
import newCode from './newCode';

const Diff = props => {
  return <ReactDiffViewer {...props} />;
};

Diff.propTypes = {
  oldValue: PropTypes.string, // Old value as string.
  newValue: PropTypes.string, // New value as string.
  splitView: PropTypes.bool, // Switch between unified and split view.
  disableWordDiff: PropTypes.bool, //	Show and hide word diff in a diff line.
  hideLineNumbers: PropTypes.bool, //	Show and hide line numbers.
  renderContent: PropTypes.func, //	Render Prop API to render code in the diff viewer. Helpful for syntax highlighting
  onLineNumberClick: PropTypes.func, //	Event handler for line number click. (lineId: string) => void
  highlightLines: PropTypes.array, // List of lines to be highlighted. Works together with onLineNumberClick. Line number are prefixed with L and R for the left and right section of the diff viewer, respectively. For example, L-20 means 20th line in the left pane. To highlight a range of line numbers, pass the prefixed line number as an array. For example, [L-2, L-3, L-4, L-5] will highlight the lines 2-5 in the left pane.
  showDiffOnly: PropTypes.bool, // Shows only the diffed lines and folds the unchanged lines
  extraLinesSurroundingDiff: PropTypes.number, //	Number of extra unchanged lines surrounding the diff. Works along with showDiffOnly.
  codeFoldMessageRenderer: PropTypes.func, //	Expand {number} of lines ...	Render Prop API to render code fold message.
  styles: PropTypes.object, // To override style variables and styles. Learn more about overriding styles
};

Diff.defaultProps = {
  oldValue: oldCode,
  newValue: newCode,
  splitView: true,
  disableWordDiff: false,
  hideLineNumbers: false,
  renderContent: undefined,
  onLineNumberClick: undefined,
  highlightLines: [],
  showDiffOnly: true,
  extraLinesSurroundingDiff: 3,
  codeFoldMessageRenderer: number => `Expand ${number} of lines ...`,
  styles: {},
};

export default Diff;
