import React from 'react';
import TextLoop from 'react-text-loop';
import styles from './index.less';

const Demo = () => {
  return (
    <div className={styles.wrapper}>
      <TextLoop
        /**
         * Any additional CSS classes you might want to use to style the image
         */
        className={styles.textLoop}
        /**
         * The frequency (in ms) that the words change.
         * Can also pass an array if you want a different interval per children
         */
        interval={1000}
        /**
         * A delay (in ms) for the animation to start.
         * This allows to use multiple instances to create a staggered animation effect for example.
         */
        delay={0}
        /**
         * The speed that the container around each word adjusts to the next one (in ms).
         * Usually you don't need to change this.
         */
        adjustingSpeed={150}
        /**
         * Enable or disable the fade animation on enter and leave
         */
        fade={true}
        /**
         * Mask the animation around the bounding box of the animated content
         */
        mask={true}
        /**
         * Disable whitepace: nowrap style for each element.
         * This is used by default so we can always get the right width of the element but can have issues sometimes.
         */
        noWrap={true}
        /**
         * Configuration for react-motion spring
         * https://github.com/chenglou/react-motion
         */
        springConfig={{
          stiffness: 340,
          damping: 30,
        }}
        /**
         * The words you want to loop (required)
         * You can also just send a normal array as children prop if you don't need any individual styling for each node.
         */
        // children={[
        //   'Trade faster',
        //   'Increase sales',
        //   'Stock winners',
        //   'Price perfectly',
        // ]}
      >
        <span>First item</span>
        <span>Second item</span>
        <span>Third item</span>
      </TextLoop>
      <TextLoop className={styles.textLoop} delay={1000}>
        <span>ready</span>
        <span>running</span>
        <span>success</span>
      </TextLoop>
      <div>Starting right now.</div>
    </div>
  );
};

Demo.menu = { name: 'React Text Loop' };

export default Demo;
