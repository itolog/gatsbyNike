import React from 'react';
import './WrappCenter.scss';

interface Props {
  children: JSX.Element;
}

const wrappCenter = ({ children }: Props) => {
  return <div className="wrapp">{children}</div>;
};

export default wrappCenter;
