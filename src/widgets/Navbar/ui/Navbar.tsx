import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModalVisible((prev) => !prev);
    }, []);

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpened={isAuthModalVisible} onClose={onToggleModal}>
                {t(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fugiat quos deleniti corporis natus
                aperiam maiores nisi suscipit quae dolores pariatur eaque, dicta, non quaerat animi voluptas commodi
                voluptatum qui!`)}
            </Modal>
        </div>
    );
};
