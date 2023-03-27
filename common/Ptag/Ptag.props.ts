import { DetailedHTMLProps, ReactNode, HTMLAttributes } from 'react';

export interface PtagProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLParagraphElement>,
        HTMLParagraphElement
    > {
    size?: 's' | 'm' | 'l';
    className?: string;
    children: ReactNode;
}
