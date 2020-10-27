import React, { FunctionComponent, ReactNode } from 'react';
import './Grid.scss';

interface IGridOwnProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  row?: boolean;
  gutters?: boolean;
  classes?: string;
  children?: ReactNode;
}

// elsint-disable @typescript-eslint/no-non-null-assertion
const Grid: FunctionComponent<IGridOwnProps> = ({
  xs,
  sm,
  md,
  lg,
  xl,
  row,
  gutters,
  classes,
  children,
}) => {
  const classNames = [
    xs! > 0 ? `col-xs-${xs}` : '',
    sm! > 0 ? `col-sm-${sm}` : '',
    md! > 0 ? `col-md-${md}` : '',
    lg! > 0 ? `col-lg-${lg}` : '',
    xl! > 0 ? `col-xl-${xl}` : '',
    row ? 'flex' : '',
    gutters ? 'grid-gutters' : '',
    !xs && !row ? 'col-xs-12' : '',
    classes,
  ].reduce((acc, cur) => (
    cur ? `${cur} ${acc}` : acc
  ), '');
  return (
    <div className={classNames}>
      { children }
    </div>
  );
};

Grid.defaultProps = {
  xs: 0,
  sm: 0,
  md: 0,
  lg: 0,
  xl: 0,
  row: false,
  gutters: false,
  classes: '',
};

export default Grid;
