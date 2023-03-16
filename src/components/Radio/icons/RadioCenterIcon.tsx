import type { SvgIconProps } from 'components/icons';
import { SvgIcon } from 'components/icons';
import * as React from 'react';
import { createStyles } from 'styling';

const useStyles = createStyles({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  icon: (props: RadioCenterIconProps) => ({
    opacity: props.visible ? 1 : 0,
    transition: 'opacity 0.15s'
  })
});

export interface RadioCenterIconProps extends SvgIconProps {
  visible?: boolean;
}

const RadioCenterIcon: React.FC<RadioCenterIconProps> = ({ visible = false, ...props }): JSX.Element => {
  const classNames = useStyles({ visible });

  return (
    <div className={classNames.root}>
      <SvgIcon className={classNames.icon} viewBox="0 0 24 24" {...props}>
        <path xmlns="http://www.w3.org/2000/svg" d="M0 0h24v24H0z" fill="none" />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"
        />
      </SvgIcon>
    </div>
  );
};

export default RadioCenterIcon;
