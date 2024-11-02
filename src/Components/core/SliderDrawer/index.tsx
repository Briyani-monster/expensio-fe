import React, { useEffect, useRef, useState } from "react";

import Icon from "../Icon";
import { ANIMATION_TYPE } from "../../../utils/app";
import { AnimationTypeProps } from "../typeCore";
export interface SliderDrawerProps {
  show: boolean;
  children: React.ReactNode;
  haveBack?: boolean;
  close: (e: React.MouseEvent<HTMLDivElement>) => void;
  onBack?: () => void;
  rightExtraHeaderContent?: React.ReactNode;
  stackLength?: number;
  animationType?: (typeof ANIMATION_TYPE)[keyof typeof ANIMATION_TYPE];
  isExpandedSlider?: boolean;
}
export default function SlideDrawer({
  show,
  children,
  haveBack,
  close,
  onBack,
  rightExtraHeaderContent,
  stackLength,
  animationType,
  isExpandedSlider,
}: SliderDrawerProps) {
  const [sliderClass, setSliderClass] = useState("slider");
  const [isScrolled, setIsScrolled] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const classList = document.body.classList;
    if (show) {
      setSliderClass("slider open");
      classList.add("overflow-hidden");
    } else {
      setSliderClass("slider");
      classList.remove("overflow-hidden");
    }
    return () => classList.remove("overflow-hidden");
  }, [show]);
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        setIsScrolled(contentRef.current.scrollTop > 0);
      }
    };

    const debouncedHandleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = window.setTimeout(() => {
        handleScroll();
        scrollTimeoutRef.current = null;
      }, 300); // Adjust debounce delay as needed
    };

    const contentEl = contentRef.current;
    contentEl?.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      contentEl?.removeEventListener("scroll", debouncedHandleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div id="slider-component">
      <div
        className={isExpandedSlider ? `${sliderClass} w-10/12` : sliderClass}
      >
        <div
          aria-labelledby="slider-header"
          id="slider-header"
          className={`z-10 flex items-center shrink-0 p-6 pb-3 justify-between  ${
            isScrolled ? "shadow-md" : ""
          }`}
        >
          <div
            aria-labelledby="slider-header-left-side"
            className="flex items-center gap-2"
          >
            {onBack && haveBack ? (
              <span
                onClick={onBack}
                className="cursor-pointer p-4.5 rounded-lg hover:bg-neutral-200 self-start"
              >
                <Icon name="ArrowLeft" />
              </span>
            ) : null}
          </div>
          <div
            aria-labelledby="slider-header-right-side"
            className="flex items-center gap-2"
          >
            {rightExtraHeaderContent}
            <span
              id="hide-close"
              onClick={close}
              className="cursor-pointer p-4.5 rounded-lg hover:bg-neutral-200 self-start"
            >
              <Icon name="Close" className="text-neutral-800" />
            </span>
          </div>
        </div>

        {show && (
          <div
            id="slider-core-container-id"
            key={`key-and-value-${stackLength}`}
            className={`slider-content-container relative ${
              animationType === ANIMATION_TYPE.INCREMENT
                ? "slide-in"
                : "slide-out"
            }`}
          >
            {children}
          </div>
        )}
      </div>
      {show ? <Backdrop close={close} /> : null}
    </div>
  );
}

export type BackdropProps = {
  close: (e: React.MouseEvent<HTMLDivElement>) => void;
};
function Backdrop({ close }: BackdropProps) {
  return (
    <div
      className="fixed w-full  h-full bg-black z-[801] top-0 right-0 opacity-50"
      onClick={(e) => {
        e.stopPropagation();
        close(e);
      }}
    />
  );
}
