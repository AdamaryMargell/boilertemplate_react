import { classNames } from 'primereact/utils';

export const progressSpinnerPT = {
    root: {
        className: classNames(
            'relative mx-auto w-28 h-28 inline-block',
            'before:block before:pt-full'
        )
    },
    spinner: {
        className: classNames(
            'absolute top-0 bottom-0 left-0 right-0 m-auto w-full h-full',
            'transform origin-center animate-spin'
        )
    },
    circle: {
        className: classNames('text-red-500', 'progress-spinner-circle')
    }
};
