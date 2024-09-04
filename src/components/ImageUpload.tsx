'use client'

import { useId, useRef } from 'react'
import { Label } from './Fields'

export function ImageUploadField({
  label,
  type = 'text',
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'input'>, 'id'> & { label: string }) {
  let id = useId()
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className={className}>
      {label && (
        <Label id={id}>
          {label} <span className="text-red-500">*</span>
        </Label>
      )}
      <input
        id={id}
        type="file"
        accept=".jpg,.jpeg,.png,.pdf,capture=camera"
        {...props}
      />
    </div>
  )
}
