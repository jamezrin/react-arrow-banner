import { FC } from 'react';
import './ArrowBanner.css';
import { cx } from '../../utils';

export type ArrowBannerProps = React.PropsWithChildren<{
  color: string;
  bgColor: string;
  height: string;
  width: string;
  direction?: 'left' | 'right';
  skewDeg: number;
  leftStop?: boolean;
  rightStop?: boolean;
  parentProps?: React.HTMLAttributes<HTMLDivElement>;
  childrenProps?: React.HTMLAttributes<HTMLDivElement>;
  children: React.ReactNode;
}>;

export const ArrowBanner: FC<ArrowBannerProps> = ({
  color,
  bgColor,
  height,
  width,
  direction = 'right',
  skewDeg,
  leftStop = false,
  rightStop = false,
  parentProps,
  childrenProps,
  children,
  ...restProps
}) => {
  const skewTan = Math.tan((skewDeg * Math.PI) / 180);

  const cssVarsStyle = {
    '--ab-width': width,
    '--ab-height': height,
    '--ab-bgcolor': bgColor,
    '--ab-color': color,
    '--ab-skew-deg': skewDeg + 'deg',
    '--ab-skew-tan': skewTan,
    '--ab-direction': direction === 'right' ? 1 : -1,
    '--ab-left-stop': leftStop ? -1 : 1,
    '--ab-right-stop': rightStop ? -1 : 1,
  };

  return (
    <div
      {...restProps}
      {...parentProps}
      className={cx(parentProps?.className, 'react-arrow-banner__parent')}
      style={{ ...parentProps?.style, ...cssVarsStyle }}
    >
      <div
        {...childrenProps}
        className={cx(parentProps?.className, 'react-arrow-banner__children')}
      >
        {children}
      </div>
    </div>
  );
};

export default ArrowBanner;
