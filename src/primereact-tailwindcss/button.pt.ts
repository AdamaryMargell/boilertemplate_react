import { classNames } from "primereact/utils";

export const buttonPT = {
  root: ({ props, context }) => ({
    className: classNames(
      'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom',
      'transition duration-200 ease-in-out',
      'focus:outline-none focus:outline-offset-0',
      {
        'text-white border bg-primary-600 hover:bg-primary-700 focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1),0_1px_2px_0_rgba(0,0,0,1)]':
          !props.link && props.severity === null && !props.text && !props.outlined && !props.plain,
        'text-blue-600 bg-transparent border-transparent focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1),0_1px_2px_0_rgba(0,0,0,1)]':
          props.link
      },
      {
        'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(176,185,198,1),0_1px_2px_0_rgba(0,0,0,1)]': props.severity === 'secondary',
        'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(247,162,162,1),0_1px_2px_0_rgba(0,0,0,1)]': props.severity === 'danger'
      },
      {
        'text-secondary-600 bg-secondary-50 border border-secondary-300 hover:bg-secondary-50 hover:border-gray-600/': props.severity === 'secondary' && !props.text && !props.outlined && !props.plain,
        'text-white bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600': props.severity === 'danger' && !props.text && !props.outlined && !props.plain
      },
      { 'shadow-lg': props.raised },
      {
        'rounded-md': !props.rounded,
        'rounded-full': props.rounded
      },
      {
        'bg-transparent border-transparent': props.text && !props.plain,
        'text-blue-500 hover:bg-blue-300/20': props.text && (props.severity === null || props.severity === 'info') && !props.plain,
        'text-gray-500 hover:bg-gray-300/20': props.text && props.severity === 'secondary' && !props.plain,
        'text-red-500 hover:bg-red-300/20': props.text && props.severity === 'danger' && !props.plain
      },
      { 'shadow-lg': props.raised && props.text },
      // {
      //   'text-gray-500 hover:bg-gray-300/20': props.plain && props.text,
      //   'text-gray-500 border border-gray-500 hover:bg-gray-300/20': props.plain && props.outlined,
      //   'text-white bg-gray-500 border border-gray-500 hover:bg-gray-600 hover:border-gray-600': props.plain && !props.outlined && !props.text
      // },
      // {
      //   'bg-transparent border': props.outlined && !props.plain,
      //   'text-gray-500 border border-gray-500 hover:bg-gray-300/20': props.outlined && props.severity === 'secondary' && !props.plain,
      //   'text-green-500 border border-green-500 hover:bg-green-300/20': props.outlined && props.severity === 'success' && !props.plain,
      //   'text-orange-500 border border-orange-500 hover:bg-orange-300/20': props.outlined && props.severity === 'warning' && !props.plain,
      //   'text-purple-500 border border-purple-500 hover:bg-purple-300/20': props.outlined && props.severity === 'help' && !props.plain,
      //   'text-red-500 border border-red-500 hover:bg-red-300/20': props.outlined && props.severity === 'danger' && !props.plain
      // },
      {
        'text-[12px] w-[150px] h-[24px] py-[4px] px-[8px]': props.size === 'small',
        'text-[14px] w-[150px] h-[32px] px-[10px] py-[6px]': props.size === null,
        'text-[16px] w-[150px] h-[40px] px-[16px] py-[8px]': props.size === 'large'
      },
      { 'flex-column': props.iconPos == 'top' || props.iconPos == 'bottom' },
      { 'opacity-60 pointer-events-none cursor-default': context.disabled }
    )
  }),
  label: ({ props }) => ({
    className: classNames(
      'flex-1',
      'duration-200',
      'font-medium',
      {
        'hover:underline': props.link
      },
      { 'invisible w-0': props.label == null }
    )
  }),
  icon: ({ props }) => ({
    className: classNames('mx-0', {
      'mr-2': props.iconPos == 'left' && props.label != null,
      'ml-2 order-1': props.iconPos == 'right' && props.label != null,
      'mb-2': props.iconPos == 'top' && props.label != null,
      'mt-2 order-2': props.iconPos == 'bottom' && props.label != null
    })
  }),
  loadingIcon: ({ props }) => ({
    className: classNames('mx-0', {
      'mr-2': props.loading && props.iconPos == 'left' && props.label != null,
      'ml-2 order-1': props.loading && props.iconPos == 'right' && props.label != null,
      'mb-2': props.loading && props.iconPos == 'top' && props.label != null,
      'mt-2 order-2': props.loading && props.iconPos == 'bottom' && props.label != null
    })
  }),
  badge: ({ props }) => ({
    className: classNames({ 'ml-2 w-4 h-4 leading-none flex items-center justify-center': props.badge })
  })
}
