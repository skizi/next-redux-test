import React, { useCallback, useRef, useState } from 'react';
import { Thumbnail } from './thumbnail';
import axios from 'axios';

export const PostEvents: React.FC = () => {
  const zipcodeRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const getAddress = useCallback(() => {
    if (zipcodeRef?.current?.value === '') return;
    axios
      .get('https://api.zipaddress.net/', {
        params: { zipcode: zipcodeRef?.current?.value },
      })
      .then((response) => {
        if (addressRef.current !== null)
          addressRef.current.value = response.data.data.address;
      })
      .catch((error) => {
        console.log(error);
      });
  }, [addressRef, zipcodeRef]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        getAddress();
      }}
    >
      <input type="text" ref={zipcodeRef} />
      <button>post</button>
      <br />
      <input type="text" ref={addressRef} />
    </form>
  );
};
