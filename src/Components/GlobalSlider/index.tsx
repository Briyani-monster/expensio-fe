import React, { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SLIDERS } from "./Sliders";
import SlideDrawer from "../core/SliderDrawer";
interface SliderStructure {
  component: (typeof SLIDERS)[keyof typeof SLIDERS];
  value: string | number | null;
  key: string;
}
const GlobalSlider = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const slidersList: any = useMemo(() => {
    const keys = [...searchParams?.keys()];
    const values = [...searchParams?.values()];
    const updatedSlidersKeys = keys.filter((key) => SLIDERS[key]);
    setIsOpen(updatedSlidersKeys.length > 0);

    const updatedSliderMap: SliderStructure[] =
      updatedSlidersKeys.map((key, index) => ({
        component: SLIDERS[key].components,
        value: values[index],
        key: key,
      })) || [];
    return {
      allSliders: updatedSliderMap,
      currentSlider: updatedSliderMap.at(-1),
    };
  }, [JSON.stringify([...searchParams?.keys()])]);

  const handleClose = () => {
    setIsOpen(false);
    setSearchParams({});
  };
  const Component = useMemo(
    () =>
      slidersList.currentSlider ? slidersList.currentSlider.components : null,
    [JSON.stringify(slidersList.currentSlider)],
  );
  return (
    <SlideDrawer show={isOpen} close={handleClose}>
      {Component ? (
        <Component
          key={slidersList.currentSlider.key}
          value={slidersList.currentSlider.value}
        />
      ) : null}
    </SlideDrawer>
  );
};

export default GlobalSlider;
