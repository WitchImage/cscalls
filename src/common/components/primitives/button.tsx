import { cn } from '@/lib/utils';
import { type FC, type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary';
    width: 'fit' | 'full';
}

export const Button: FC<ButtonProps> = ({
    variant,
    width,
    children,
    className,
    ...props
}) => {
    const classes = {
        'bg-primary border-none hover:bg-primary-800': variant === 'primary',
        'bg-secondary border-none hover:bg-secondary-800':
            variant === 'secondary',
        'w-full': width === 'full',
        'w-fit': width === 'fit',
    };

    return (
        <button
            className={`${cn(
                'primitive-field transition-transform active:scale-[0.9]',
                className,
                classes
            )}`}
            {...props}
        >
            {children}
        </button>
    );
};
