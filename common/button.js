import React from 'react';
import {useRouter} from 'next/router';

export const CustomButton = ({className, id, width, height, text, link}) => {
  const router = useRouter();

  const changeRoute = (e) => {
    e.preventDefault();
    router.push(link);
  };

  return (
    <button
      onClick={(e) => changeRoute(e)}
      className={`btn_class ${className} `}
      id={id}
      style={{width: width, height: height}}
      value={text}
      name={text}
    >
      {text}
    </button>
  );
};
