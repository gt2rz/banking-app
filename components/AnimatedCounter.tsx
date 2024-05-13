"use client";
import CountUp from "react-countup";

type AnimatedCounterProps = {
  value: number;
  duration?: number;
  prefix?: string;
  decimals?: number;
  decimal?: string;
};

const AnimatedCounter = ({
  value,
  duration = 1,
  prefix = "",
  decimals = 0,
  decimal = ".",
}: AnimatedCounterProps) => {
  return (
    <div className="w-full">
      <CountUp
        end={value}
        duration={duration}
        prefix={prefix}
        decimals={decimals}
        decimal={decimal}
      />
    </div>
  );
};

export default AnimatedCounter;
