
import React, { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { formatCurrency } from "@/utils/formatCurrency";

interface PriceRangeSliderProps {
  min: number;
  max: number;
  onChange: (values: [number, number]) => void;
  defaultValue?: [number, number];
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  min,
  max,
  onChange,
  defaultValue = [min, max],
}) => {
  const [value, setValue] = useState<[number, number]>(defaultValue);

  // Initialize with default values or props values
  useEffect(() => {
    setValue([
      Math.max(min, defaultValue[0]),
      Math.min(max, defaultValue[1]),
    ]);
  }, [min, max, defaultValue]);

  const handleChange = (newValue: number[]) => {
    const range: [number, number] = [newValue[0], newValue[1]];
    setValue(range);
    onChange(range);
  };

  return (
    <div className="w-full">
      <Slider
        defaultValue={[value[0], value[1]]}
        value={[value[0], value[1]]}
        min={min}
        max={max}
        step={10000}
        onValueChange={handleChange}
        className="my-6"
      />
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">
          {formatCurrency(value[0])}
        </span>
        <span className="text-sm font-medium">
          {formatCurrency(value[1])}
        </span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
