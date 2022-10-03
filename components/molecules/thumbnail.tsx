import React from 'react';
import { css } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import { countSelector, increase } from '../../store/counts';
import { useAppDispatch } from '../../store';

interface Props {
  title: string;
  outline: string;
}

export const Thumbnail: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const count = useSelector(countSelector);
  const clickHandler = () => {
    dispatch(increase(1));
  };
  return (
    <div
      onClick={clickHandler}
      css={{
        width: '200px',
        margin: '0 5px',
        padding: '5px',
        border: '1px solid #aaa',
        borderRadius: '10px',
      }}
    >
      <h4>{props.title}</h4>
      <p>{props.outline}</p>
      <p>{count}</p>
    </div>
  );
};
