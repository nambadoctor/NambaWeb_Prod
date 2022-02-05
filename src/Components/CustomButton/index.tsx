import React from "react";

// Local Imports
import styles from "./styles.module.scss";

type Props = {
  isPurple: boolean;
  title: string;
  small: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  isDisabled?: boolean;
  onClick: () => void;
};

const CustomButton: React.FC<Props> = (props) => {
  if (!props.isPurple)
    return (
      <button
        disabled={props.isDisabled}
        onClick={props.onClick}
        className={styles.black}
        type={props.type ? props.type : "button"}
      >
        {props.title}
      </button>
    );
  else
    return (
      <button
        disabled={props.isDisabled}
        onClick={props.onClick}
        className={props.small ? styles.smallPurple : styles.purple}
        type={props.type ? props.type : "button"}
      >
        {props.title}
      </button>
    );
};

export default CustomButton;
