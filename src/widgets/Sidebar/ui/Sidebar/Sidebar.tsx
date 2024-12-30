import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((value) => !value);
    };

    return (
        <div className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};
