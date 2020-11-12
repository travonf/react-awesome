import React from 'react';
import PropTypes from 'prop-types';
import { ReactGhLikeDiff } from 'react-gh-like-diff';
import 'react-gh-like-diff/dist/css/diff2html.min.css';
import oldCode from './oldCode';
import newCode from './newCode';

const Index = props => {
  return <ReactGhLikeDiff {...props} />;
};

Index.propTypes = {
  past: PropTypes.string, // Passing past string as past prop with current prop for comparison.
  current: PropTypes.string, // Passing current string as current prop with past prop for comparison.
  diffString: PropTypes.string, // Passing unified diff as prop to generate pretty HTML.
  options: PropTypes.object, // Reference diff2html docs for extra configuration setting.
};

Index.defaultProps = {
  past: oldCode,
  current: newCode,
  diffString: '',
  options: {
    originalFileName: 'File-Name',
    updatedFileName: 'File-Name',
    inputFormat: 'diff',
    outputFormat: 'side-by-side',
    showFiles: false,
    matching: 'none',
    matchWordsThreshold: 0.25,
    matchingMaxComparisons: 2500,
  },
};

export default Index;
