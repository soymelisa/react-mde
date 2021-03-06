import * as React from "react";
import { classNames } from "../util/ClassNames";

export interface MdeToolbarButtonGroupProps {
  hidden: boolean
}

export const MdeToolbarButtonGroup: React.SFC<MdeToolbarButtonGroupProps> = (props) => {
  return (
    <ul className={classNames("mde-header-group", { hidden: props.hidden })}>
      {props.children}
    </ul>
  );
};
