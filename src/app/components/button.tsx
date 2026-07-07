'use client';
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { ReactNode } from 'react';

const buttonVariants = cva(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-mono uppercase tracking-wide text-sm font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transition-all duration-300',
    {
        variants: {
            variant: {
                primary:
                    'flex items-center w-fit cursor-pointer border border-primary bg-primary hover:bg-primaryhg text-ink',
                secondary:
                    'flex items-center w-fit cursor-pointer border border-bone/20 bg-transparent hover:bg-bone/10',
                ghost: 'flex items-center w-fit cursor-pointer hover:bg-white/10',
                danger: 'flex items-center w-fit cursor-pointer border border-white/20 bg-white/10 hover:bg-white/20 text-primary',
            },
            size: {
                sm: 'min-h-8 px-3',
                m: 'min-h-10 px-4',
                lg: 'min-h-12 px-8',
                xl: 'min-h-14 px-8',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'm',
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    buttonType: 'default' | 'navigation' | 'action' | 'submit';
    navigationUrl?: string;
    placeHolder: string;
    icon?: ReactNode;
    external?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, buttonType, navigationUrl, onClick, placeHolder, icon, external, ...props }, ref) => {
        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (buttonType === 'navigation' && navigationUrl) {
                if (external) {
                    window.open(navigationUrl, '_blank', 'noopener,noreferrer');
                } else {
                    window.location.href = navigationUrl;
                }
                return;
            }
            if (buttonType === 'action' && onClick) {
                onClick(e);
            }
        };

        const textClass = `flex items-center font-bold gap-2 ${size === 'lg' ? 'text-base' : ''} ${size === 'xl' ? 'text-lg' : ''}`;

        return (
            <button
                className={buttonVariants({ variant, size, className })}
                ref={ref}
                {...props}
                onClick={handleClick}
                type={buttonType === 'submit' ? 'submit' : 'button'}
            >
                {buttonType === 'navigation' && (
                    <Link href={navigationUrl || '#'} className={textClass} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                        {placeHolder}
                        {icon && <span>{icon}</span>}
                    </Link>
                )}
                {(buttonType === 'action' || buttonType === 'default') && (
                    <div className={textClass}>
                        {placeHolder}
                        {icon && <span>{icon}</span>}
                    </div>
                )}
                {buttonType === 'submit' && (
                    <div className="w-full h-full text-center font-bold">{placeHolder}</div>
                )}
            </button>
        );
    }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
