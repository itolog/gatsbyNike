import React from 'react';
import './button.scss';

export interface AppProps {
  text: string;
  rever?: string;
  className?: string;
}

const ButtonMy = (props: AppProps) => {
  return (
    <button
      className={!props.rever ? 'btns--item' : 'btns--item btns--item__rever'}
    >
      {props.text}
    </button>
  );
};

export default ButtonMy;
