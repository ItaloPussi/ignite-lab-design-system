import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Button({children, asChild, className, ...rest}: ButtonProps){
    const Comp = asChild ? Slot : 'button';
    return (
        <Comp 
            className={clsx(
                'font-sans rounded py-3 px-4 w-full font-semibold text-sm text-black bg-cyan-500 hover:bg-cyan-300 transition-colors focus:ring-2 ring-white',
                className
            )}
            {...rest}
        >
            {children}
        </Comp>
    )
}