import React from 'react';
// Local Imports
import styles from './styles.module.scss';

type Props = {
    isPurple: boolean;
    title: string;
    small: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    isDisabled?: boolean;
    onClick: () => void;
};

const CustomButton: React.FC<Props> = (props) => {
    if (!props.isPurple)
        return (
            <button
                disabled={props.isDisabled}
                onClick={props.onClick}
                type={props.type ? props.type : 'button'}
                className={props.className ? props.className : 'w-full'}
                style={{
                    backgroundColor: '#1672f9',
                    border: 'none',
                    color: 'white',
                    paddingTop: 10,
                    paddingBottom: 10,
                    fontWeight: 'bold',
                    fontSize: 17,
                    borderRadius: 10,
                }}
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
                type={props.type ? props.type : 'button'}
            >
                {props.title}
            </button>
        );
};

export default CustomButton;
