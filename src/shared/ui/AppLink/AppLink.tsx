import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;

    return (
        <Link className={classNames(styles.appLink, {}, [className, styles[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};
