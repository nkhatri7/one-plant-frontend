import { MouseEventHandler } from 'react';
import './CloseButton.scss';

type CloseButtonProps = {
	modal: String,
	onClick: MouseEventHandler,
};

const CloseButton = ({ modal, onClick }: CloseButtonProps) => {
    return (
        <button className={`close-btn close-btn--${modal}`} aria-label='Close' onClick={onClick}>X</button>
    );
};

export default CloseButton;