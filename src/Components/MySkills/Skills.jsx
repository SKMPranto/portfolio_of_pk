import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const [counterOn, setCounterOn] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
    onChange: (visible) => setCounterOn(visible),
  });

  return (
    <div className="my-10">
      <h1 className="text-center text-5xl font-bold my-10">My Skills</h1>

      <div
        ref={ref}
        className="grid grid-cols-2 lg:grid-cols-4 justify-items-center gap-5"
      >
        {/* JavaScript */}
        <div className="text-center">
          <img src="https://i.ibb.co.com/Kpdzh3nb/js.png" alt="JavaScript" />
          <h2 className="text-2xl font-semibold mt-2">
            {counterOn && <CountUp start={0} end={75} duration={2} />}%
          </h2>
        </div>

        {/* React */}
        <div className="text-center">
          <img src="https://i.ibb.co.com/j9R7vXtN/react.png" alt="React" />
          <h2 className="text-2xl font-semibold mt-2">
            {counterOn && <CountUp start={0} end={66} duration={2} />}%
          </h2>
        </div>

        {/* Node.js */}
        <div className="text-center">
          <img src="https://i.ibb.co.com/fVR6LTbr/nodejs.png" alt="Node.js" />
          <h2 className="text-2xl font-semibold mt-2">
            Learning
          </h2>
        </div>

        {/* MongoDB */}
        <div className="text-center">
          <img src="https://i.ibb.co.com/tT2mRRpc/mongo.png" alt="MongoDB" />
          <h2 className="text-2xl font-semibold mt-2">
            {counterOn && <CountUp start={0} end={51} duration={2} />}%
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Skills;
