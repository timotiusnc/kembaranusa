import clsx from 'clsx'
import { useId } from 'react'

export const formClasses =
  'block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm'

export function Label({
  id,
  children,
}: {
  id: string
  children: React.ReactNode
}) {
  return (
    <label
      htmlFor={id}
      className="mb-3 block text-sm font-medium text-gray-700"
    >
      {children}
    </label>
  )
}

export function TextField({
  label,
  desc,
  type = 'text',
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'input'>, 'id'> & { label: string } & {
  desc?: string
}) {
  let id = useId()

  return (
    <div className={className}>
      {label && (
        <Label id={id}>
          {label} {desc ? <span className="italic">{desc}</span> : ''}
          {props.required ? <span className="text-red-500">*</span> : ''}
        </Label>
      )}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  )
}

export function SelectField({
  label,
  desc,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'select'>, 'id'> & { label: string } & {
  desc?: string
}) {
  let id = useId()

  return (
    <div className={className}>
      {label} {desc ? <span className="italic">{desc}</span> : ''}
      <select id={id} {...props} className={clsx(formClasses, 'pr-8')} />
    </div>
  )
}
