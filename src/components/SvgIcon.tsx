import React, { FC } from 'react';

type SvgIconProps = {
  iconClass: string;
};

const SvgIcon: FC<SvgIconProps> = props => {
  const { iconClass } = props;
  return (
    <svg aria-hidden='true' className='svg-icon'>
      <use xlinkHref={`#icon-${iconClass}`} />
    </svg>
  );
};

export default SvgIcon;
