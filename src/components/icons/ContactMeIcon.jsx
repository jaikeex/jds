import React from 'react';

export const ContactMeIcon = props => {
  const { className, size = 18, color = '#D9D9D9' } = props;

  return (
    <svg
      className={className}
      fill={color}
      width={size}
      height={size}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      enableBackground="new 0 0 24 24"
      xmlSpace="preserve"
    >
      <path d="m21.75 20h-19.5c-1.241 0-2.25-1.009-2.25-2.25v-11.5c0-1.241 1.009-2.25 2.25-2.25h19.5c1.241 0 2.25 1.009 2.25 2.25v11.5c0 1.241-1.009 2.25-2.25 2.25zm-19.5-14.5c-.414 0-.75.336-.75.75v11.5c0 .414.336.75.75.75h19.5c.414 0 .75-.336.75-.75v-11.5c0-.414-.336-.75-.75-.75z" />
      <path d="m11.999 13.996c-.438 0-.875-.103-1.273-.309l-10.323-5.393c-.367-.191-.509-.644-.318-1.011.192-.367.646-.509 1.012-.317l10.32 5.39c.358.185.808.185 1.169-.002l10.317-5.388c.367-.193.82-.05 1.012.317s.05.82-.317 1.012l-10.32 5.39c-.402.207-.84.311-1.279.311z" />
    </svg>
  );
};
