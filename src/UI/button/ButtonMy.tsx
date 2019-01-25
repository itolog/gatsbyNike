import React from 'react';
import './button.scss';

export interface AppProps {
  text: string;
  styles?: object;
}

const ButtonMy = (props: AppProps) => {
  return (
    <button className="btns--item" style={props.styles}>
      {props.text}
    </button>
  );
};

export default ButtonMy;
