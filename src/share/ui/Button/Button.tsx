import { Link } from 'react-router-dom';
import './Button.css';

interface ButtonProps {
    children: React.ReactNode;
    linkTo?: string;
    className?: string;
    type?: 'link' | 'button';
    onClick?: () => void;
    ariaLabel?: string;
}

const Button = ({
    children,
    className = '',
    type = 'button',
    linkTo = '/',
    onClick,
    ariaLabel,
}: ButtonProps) => {
    const buttonClasses = `button_custom ${type}__style ${className}`;

    if (type === 'link') {
        return (
            <Link
                to={linkTo}
                className={buttonClasses}
                aria-label={ariaLabel}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            type="button"
            className={buttonClasses}
            onClick={onClick}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
};

export default Button;