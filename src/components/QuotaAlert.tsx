'use client'

interface QuotaAlertProps {
  className?: string
}

export function QuotaAlert({ className = '' }: QuotaAlertProps) {
  const isRegistrationOpen =
    process.env.NEXT_PUBLIC_OPEN_REGISTRATION === undefined ||
    process.env.NEXT_PUBLIC_OPEN_REGISTRATION === 'true'

  const volunteerQuota = process.env.NEXT_PUBLIC_VOLUNTEER_QUOTA || '12'

  if (!isRegistrationOpen) {
    return null
  }

  return (
    <div
      className={`rounded-lg border-2 border-yellow-400 bg-yellow-50 p-4 text-center ${className}`}
    >
      <p className="font-bold text-yellow-800">
        ⚠️ Kuota Terbatas: Hanya {volunteerQuota} relawan
      </p>
    </div>
  )
}
