import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwither';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-page.svg';
import AboutIcon from 'shared/assets/icons/about-page.svg';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((value) => !value);
    };

    return (
        <div
            data-testid='sidebar'
            className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            <Button
                className={styles.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                data-testid='sidebar-toggle'
                onClick={onToggle}
                square
                size={ButtonSize.XL}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={styles.items}>
                <AppLink className={styles.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
                    <MainIcon className={styles.icon} />
                    <span className={styles.link}>{t('Главная')}</span>
                </AppLink>
                <AppLink className={styles.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
                    <AboutIcon className={styles.icon} />
                    <span className={styles.link}>{t('О сайте')}</span>
                </AppLink>
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang} short={collapsed} />
            </div>
        </div>
    );
};
