import { Link } from 'react-router-dom';
import './Button.css';

interface ButtonProps {
    children: React.ReactNode;
    variant: 'link' | 'button';
    type?: 'button' | 'submit' | 'reset'; // Только для variant="button"
    linkTo?: string;
    className?: string;
    onClick?: () => void;
    ariaLabel?: string;
}

const Button = ({
    children,
    variant = 'button',
    type = 'button',
    linkTo = '/',
    className = '',
    onClick,
    ariaLabel,
}: ButtonProps) => {
    const buttonClasses = `button_custom ${variant}__style ${className}`;

    if (variant === 'link') {
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
            type={type} // Используем переданный type (button/submit/reset)
            className={buttonClasses}
            onClick={onClick}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
};

export default Button;