import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Reddit = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 1000 1000" ref={ref} {...props}>
      <path d="M688.1 532.7c2.3 5.8 3.3 11.7 3.3 17.7 0 11.9-4.1 23.5-11 33-6.8 9.3-16.5 16.6-27.9 19.8l-.2.1h-.2c-5.3 1.8-10.8 2.7-16.2 2.7-12.7 0-25.2-4.6-35.2-12.4-9.9-7.8-17.4-19-19.8-32.2v-.2c-.7-3.4-1.1-6.8-1.1-10.2 0-11.5 3.9-22.5 10.4-31.6 6.4-9.1 15.5-16.3 26.1-20h.2c6-2.2 12.4-3.3 18.6-3.3 11.4 0 22.7 3.5 32.2 9.8 9.4 6.2 17 15.4 20.8 26.7l.1.2c-.1-.2-.1-.1-.1-.1zm-35 141c-4.5-2.9-9.7-4.7-15.2-4.7-4.4 0-9 1.3-13.1 4-38.7 23.1-84.1 35.7-129.3 35.7-33.9 0-67.5-7.1-98-22.1l-.2-.1-.2-.1c-4.6-1.9-9.8-5.9-15.6-9.7-2.9-1.9-5.9-3.8-9.3-5.1-3.3-1.4-7-2.4-11-2.4-3.3 0-6.7.7-10.1 2.3l-.5.2c-5.3 2-9.5 5.7-12.2 10.1-2.8 4.5-4.2 9.8-4.2 15.1 0 4.7 1.1 9.5 3.4 13.8 2.2 4.1 5.6 7.7 10 10 43.6 29.4 94.9 42.7 146.5 42.7 46.5 0 93.2-10.8 134.8-30.3l.2-.1.2-.1c5.5-3.2 12.8-6.2 19.7-10.4 3.4-2.2 6.7-4.7 9.6-7.9 2.8-3.2 5.1-7.2 6.4-12 .5-2.1.8-4.1.8-6.1 0-3.9-.9-7.5-2.5-10.8-2-5.1-5.8-9.1-10.2-12zM347 603c.1 0 .2 0 .3.1 5.6 2 11.3 3 17 3 14.2 0 27.9-5.8 38.4-15.3 10.4-9.5 17.5-22.9 17.5-38.2v-1.3c0-.7.1-1.4.1-2.2 0-15.2-7-28.6-17.3-38.2-10.3-9.5-24.1-15.4-38.3-15.4-3.8 0-7.7.4-11.5 1.3h-.3c-18.8 3.9-35.3 17.9-41.4 37.1v.1c-1.7 5.3-2.6 10.7-2.6 16.1 0 11.8 3.9 23.2 10.6 32.7 6.6 9.3 16.1 16.6 27.4 20l.1.2zm590.3-137.4c.1 2 .2 3.9.2 5.8 0 21.2-6.8 41.7-18.2 59-10.6 16.2-25.3 29.8-42.1 39 1.1 8.5 1.7 17 1.7 25.5 0 45.8-15.8 90.7-43.3 126.8h-.1C784.8 789.3 706.8 829.2 628 849.3h-.1c-42 10.2-85.3 15.4-128.6 15.4-64.5 0-129-11.6-189.2-35.8v-.1h-.1c-62.4-25.7-121.9-66.6-158.3-126.5-19.6-32-30.4-69.5-30.4-107.1 0-8.5.6-17.1 1.7-25.5-16.4-9.2-30.6-22.4-41.2-38-11.3-16.8-18.4-36.5-19.3-57.3v-.3c0-29.2 12.7-56.8 32.4-77.2s46.6-33.7 75.4-33.7h1.2c3-.2 6.1-.3 9.1-.3 14.5 0 29 2.3 42.8 7.6l.1.1h.1c11.8 5 23.5 10.9 33.9 19.2 3.4-1.8 7.1-3.8 11.2-5.3 63.2-37.4 136.6-51.9 208.2-56 .6-35.5 5-72.6 22.3-105.1 14.4-27 39.4-48 69.2-55.3l.1-.1h.2c11.3-2.2 22.8-3.2 34.1-3.2 30.2 0 60.1 7.2 88.1 18.3 12.4-18.7 30.1-33.3 50.8-41.4l.2-.1.2-.1c12.2-3.8 25-6 37.9-6 13.6 0 27.3 2.5 40.2 8.2l.2.1c18.4 7.1 34 20.2 45.1 36.5 11.1 16.4 17.6 36 17.6 56.1 0 3.7-.2 7.4-.6 11.2v.3c-2.2 26.1-15.4 48.9-34 65.2-18.8 16.4-43.1 26.3-68.1 26.3-4 0-8.1-.2-12.1-.8-24.8-1.9-47.9-13.9-64.9-31.7-17-17.8-28-41.6-28-67.3 0-1.2.1-2.5.2-3.7-23.3-10.4-48-19-72.5-18.9-3.6 0-7.1.2-10.7.6-18.4 1.8-35.5 13.4-43.8 30v.1c-12.6 24.5-15.1 53.1-15.5 81.5 70.5 4.6 141.4 21.5 203.5 57.2h.1l.9.5c1.2.7 3.4 1.9 5.3 2.9 4.3-3.5 8.8-7 13.9-10.1 18.9-12.6 41.2-18.8 63.5-18.8 9.9 0 19.8 1.3 29.5 3.7l.4.1.4.1c22.7 5.8 43.3 18.9 58.8 36.5 15.5 17.7 25.9 40.1 27.9 64.3zM729.8 235c0 .9 0 1.9.1 2.9v.2c.5 12.2 6.2 23.6 15 32.1 8.8 8.4 20.5 13.6 32.4 13.7h.3c.9.1 1.7.1 2.6.1 12 0 23.9-5.2 32.9-13.5 9-8.4 14.9-19.9 15.3-32.2v-.3c.1-.9.1-1.8.1-2.8 0-12.7-5.9-24.8-15.2-33.8-9.3-9-21.7-14.5-34-14.5-4 0-7.9.5-11.8 1.7h-.2c-10.1 2.6-19.6 8.9-26.5 17.2-6.9 8.4-11 18.6-11 29.2zM209.6 423.9c-9.4-4.4-19.2-7.5-28.8-7.5-1.6 0-3.2.1-4.9.3h-.4c-13.8.4-27.8 6.4-38.2 16.1-10.5 9.6-17.4 22.6-17.9 37v.2c-.1 1.2-.1 2.3-.1 3.4 0 8.8 2.7 17.4 7.3 25.2 3.4 5.8 7.9 11.1 12.9 15.7 16-35.4 41.3-65.4 70.1-90.4zm613.9 173c0-31.5-11.4-63.2-29.8-88.7-36.7-51.1-93.7-84.4-153-103l-.4-.1c-11.4-3.5-22.9-6.6-34.4-9.2-34.6-7.9-70.1-11.8-105.6-11.8-47.6 0-95.3 7-140.9 21.1-59.2 18.8-116.4 51.9-153 103.2-18.6 25.6-29.5 57.4-29.5 89 0 11.6 1.5 23.3 4.5 34.6 6.7 25.4 19.7 48.1 36.6 67.9 16.9 19.8 37.6 36.7 59.4 50.5 4.8 3 9.7 5.8 14.6 8.6 63.3 35.3 136.1 50.8 208.4 50.8 12.2 0 24.5-.4 36.7-1.3 72.8-6 145.9-27.5 205.1-71.4 18.8-13.9 36.2-30.7 50-49.9 13.8-19.2 24-40.6 28.5-63.8v-.1c1.9-8.7 2.8-17.5 2.8-26.4zM881 471.5c0-7.7-1.8-15.3-5.6-22.4l-.1-.1v-.1c-5.1-10.6-13.2-18.5-22.9-24s-21.1-8.3-32.5-8.3c-10.3 0-20.5 2.3-29.6 6.9 28.9 25.1 54.3 55.3 70.7 90.8 5.3-4.6 9.8-10.2 13.1-16.5 4.4-8.1 6.9-17.3 6.9-26.3z" />
    </svg>
  ),
);