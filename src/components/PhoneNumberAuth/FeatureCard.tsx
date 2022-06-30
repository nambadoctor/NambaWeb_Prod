import classNames from 'classnames';
import { FC } from 'react';
import { DefaultProps } from '../../utils/CommonProps';

interface FeatureCardProps extends DefaultProps {
    title: string;
    caption: string;
    image: string | React.ReactNode;
    isImageOnTop?: boolean;
    imageHeight?: number | string;
    imageWidth?: number | string;
    isSmallSubtext?: boolean;
}
export const FeatureCard: FC<FeatureCardProps> = (props) => {
    return (
        <div
            className={classNames('bg-blue-600', {
                'flex flex-col': props.isImageOnTop,
                'flex flex-row': !props.isImageOnTop,
            })}
        >
            <div className="mb-1 text-white md:mb-6">{props.image}</div>
            <div
                className={classNames({
                    'flex flex-col ml-3': !props.isImageOnTop,
                })}
            >
                <div
                    className={classNames('t__heading--h5', {
                        'mb-2': !props.isImageOnTop,
                        'mb-4': props.isImageOnTop,
                    })}
                >
                    {props.title}
                </div>
                <div
                    className={classNames(
                        't__body--b1 text-white text-xl font-thin',
                        {
                            'mr-12': !props.isImageOnTop,
                            'md:mb-4 mb-16 pr-8': props.isImageOnTop,
                            '!t__body--b2 !font-light': props.isSmallSubtext,
                        },
                    )}
                >
                    {props.caption}
                </div>
            </div>
        </div>
    );
};

FeatureCard.defaultProps = {
    imageHeight: 48,
    imageWidth: 48,
    isImageOnTop: true,
};
