import { cn } from '@/lib/utils';
import {
    type PropsWithChildren,
    type FC,
    type HTMLAttributes,
    type ReactNode,
} from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    clickable?: boolean;
    bgImage?: string;
    cardHeader?: ReactNode;
    cardFooter?: ReactNode;
}

const CardHeader: FC<PropsWithChildren> = ({ children }) => {
    return <div className='text-xl bg-primary'>{children}</div>;
};

export const Card = ({
    cardFooter,
    cardHeader,
    clickable,
    bgImage,
    children,
    className,
    ...props
}: CardProps) => {
    const classes = {
        'hover:cursor-pointer': clickable,
        'bg-cover': bgImage !== undefined,
    };

    return (
        <div
            className={cn(
                'p-8 flex flex-col items-center border border-gray-500',
                classes,
                className
            )}
            style={
                bgImage !== undefined
                    ? { backgroundImage: `url(${bgImage})` }
                    : {}
            }
            {...props}
        >
            {cardHeader}
            {children}
            {cardFooter}
        </div>
    );
};

Card.cardHeader = CardHeader;
