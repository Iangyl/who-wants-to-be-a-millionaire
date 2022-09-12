import React from 'react';
import { IBaseProps } from './index.types';

const SVGComponent: React.FC<IBaseProps> = ({ width, height }) => (
  <svg
    width={width ?? 1440}
    height={height ?? 900}
    viewBox="0 0 1440 900"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1440 0V900H0L1440 0Z" fill="#2869E8" fillOpacity={0.4} />
  </svg>
);

const BlueTriangle = React.memo(SVGComponent);
export default BlueTriangle;
