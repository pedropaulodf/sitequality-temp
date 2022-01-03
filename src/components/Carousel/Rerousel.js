import React, {
  useEffect,
  useCallback,
  useState,
  useRef,
  Children,
  RefObject
} from "react";
import { style } from "typestyle";

const wrapper = style({
  display: "flex",
  alignItems: "center",
  overflowX: "scroll",
  scrollSnapType: "x mandatory",
  "-webkit-overflow-scrolling": "touch",
  flexFlow: "row nowrap",
  "-ms-overflow-style": "none",
  scrollbarWidth: "none",
  $nest: {
    "& > *": {
      boxSizing: "border-box",
      flexShrink: 0
    },

    "&::-webkit-scrollbar": {
      display: "none"
    }
  }
});

function useWidth(elementRef) {
  const [width, setWidth] = useState(0);

  const updateWidth = useCallback(() => {
    if (elementRef && elementRef.current) {
      const { width } = elementRef.current.getBoundingClientRect();
      setWidth(width);
    }
  }, [elementRef]);

  const firstUpdateWidth = useCallback(() => {
    if (elementRef && elementRef.current) {
      let { width } = elementRef.current.getBoundingClientRect();
      width =
        width -
        parseInt(
          window
            .getComputedStyle(elementRef.current)
            .getPropertyValue("border-left-width")
        ) -
        parseInt(
          window
            .getComputedStyle(elementRef.current)
            .getPropertyValue("border-right-width")
        );

      width =
        width -
        parseInt(
          window
            .getComputedStyle(elementRef.current)
            .getPropertyValue("padding-left")
        ) -
        parseInt(
          window
            .getComputedStyle(elementRef.current)
            .getPropertyValue("padding-right")
        );

      setWidth(width);
    }
  }, [elementRef]);

  useEffect(() => {
    firstUpdateWidth();
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [updateWidth]);

  return [width];
}

export const Rerousel = ({
  children,
  itemRef,
  interval = 3000
}) => {
  const [itemWidth] = useWidth(itemRef);
  const [, setScrollInterval] = useState();
  const [currentScrollLeft, setCurrentScrollLeft] = useState(0);
  const wrapperRef = useRef(null);
  const cc = Children.count(children);

  useEffect(() => {
    if (currentScrollLeft === 0) {
      wrapperRef.current?.scrollTo({ left: 0 });
      setCurrentScrollLeft(1);
      return;
    }
    if (currentScrollLeft > cc) {
      setCurrentScrollLeft(0);
      return;
    }

    if (itemWidth != undefined) {
      wrapperRef.current?.scrollTo({
        left: itemWidth * currentScrollLeft,
        behavior: "smooth"
      });
    }
  }, [currentScrollLeft, itemWidth, cc]);

  useEffect(() => {
    const i = setInterval(() => {
      setCurrentScrollLeft((csl) => csl + 1);
    }, interval);
    setScrollInterval(i);
    return () => {
      setScrollInterval((i) => {
        if (i) {
          clearInterval(i);
        }
        return undefined;
      });
    };
  }, [itemWidth, interval]);

  return (
    <div className={wrapper} ref={wrapperRef}>
      {children}
      {children}
    </div>
  );
};
