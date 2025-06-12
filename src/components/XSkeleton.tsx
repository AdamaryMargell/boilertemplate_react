import { skeletonPT } from '@/primereact-tailwindcss/skeleton.pt';
import { Skeleton, SkeletonProps } from 'primereact/skeleton';
import React, { ReactNode } from 'react'

interface XSkeletonProps extends SkeletonProps {
    children?: ReactNode;
}

const XSkeleton = ({ children, ...props }: XSkeletonProps) => {
    return (
        <Skeleton {...props} pt={{...skeletonPT}}>
            {children}
        </Skeleton>
    )
}

export default XSkeleton