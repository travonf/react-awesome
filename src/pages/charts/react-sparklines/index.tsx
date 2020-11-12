import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesBars,
  SparklinesSpots,
  SparklinesReferenceLine,
  SparklinesNormalBand,
} from 'react-sparklines';

const Demo = () => {
  return (
    <div>
      <Sparklines
        data={[5, 10, 4, 20, 9, 15]}
        // limit={5}
        width={100}
        height={20}
        // margin={5}
      >
        <SparklinesBars />
        <SparklinesLine color="blue" />
        <SparklinesSpots />
        <SparklinesReferenceLine type="mean" />
        <SparklinesNormalBand />
      </Sparklines>
    </div>
  );
};

export default Demo;
