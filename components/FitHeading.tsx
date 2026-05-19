"use client";

import { useLayoutEffect, useRef } from "react";

type Props = {
  text: string;
  as?: "h1" | "h2" | "span" | "div";
  className?: string;
  charClassName?: string;
  trailing?: string;
  minScale?: number;
  dataAttr?: string;
};

export default function FitHeading({
  text,
  as = "h2",
  className = "",
  charClassName = "",
  trailing = "",
  minScale = 0.2,
  dataAttr
}: Props) {
  const wrapRef = useRef<HTMLElement | null>(null);
  const innerRef = useRef<HTMLSpanElement | null>(null);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;

    const fit = () => {
      wrap.style.fontSize = "";
      const base = parseFloat(getComputedStyle(wrap).fontSize);
      const target = wrap.clientWidth;
      const content = inner.scrollWidth;
      if (!base || !target || !content) return;
      if (content <= target + 1) return;
      const ratio = Math.max(minScale, (target / content) * 0.995);
      wrap.style.fontSize = base * ratio + "px";
    };

    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(wrap);
    if (wrap.parentElement) ro.observe(wrap.parentElement);
    if (typeof document !== "undefined" && document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fit).catch(() => {});
    }
    window.addEventListener("resize", fit);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, [text, trailing, minScale]);

  const setWrap = (node: HTMLElement | null) => {
    wrapRef.current = node;
  };

  const composedOuter = `${className} block min-w-0 max-w-full overflow-x-clip`;
  const dataProps = dataAttr ? { [dataAttr]: "" } : {};

  const renderChar = (ch: string, key: string | number) => (
    <span key={key} className="line-mask">
      <span className={charClassName}>{ch === " " ? " " : ch}</span>
    </span>
  );

  const innerSpan = (
    <span
      ref={innerRef}
      className="inline-block whitespace-nowrap align-top"
    >
      {text.split("").map((ch, i) => renderChar(ch, i))}
      {trailing.split("").map((ch, i) => renderChar(ch, `t-${i}`))}
    </span>
  );

  if (as === "h1")
    return (
      <h1 ref={setWrap} className={composedOuter} {...dataProps}>
        {innerSpan}
      </h1>
    );
  if (as === "span")
    return (
      <span ref={setWrap} className={composedOuter} {...dataProps}>
        {innerSpan}
      </span>
    );
  if (as === "div")
    return (
      <div ref={setWrap} className={composedOuter} {...dataProps}>
        {innerSpan}
      </div>
    );
  return (
    <h2 ref={setWrap} className={composedOuter} {...dataProps}>
      {innerSpan}
    </h2>
  );
}
