
Tailwind's spacing scale is roughly:

py-1   = 0.25rem = 4px
py-2   = 0.5rem  = 8px
py-3   = 0.75rem = 12px
py-4   = 1rem    = 16px
py-6   = 1.5rem  = 24px
py-8   = 2rem    = 32px
py-14  = 3.5rem  = 56px  ← yours

using arbitrary values 
<TableCell className="px-[20px] py-[14px] font-medium">
  {appointment.patient}
</TableCell>

using CN to combine styles
<TableCell className={cn("font-medium", cellPadding)}>{appointment.patient}</TableCell>