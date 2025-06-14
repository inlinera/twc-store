import { Notebook } from '@/shared/icons/Notebook'
import s from './index.module.scss'
import { Package } from '@/shared/icons/Package'
import { HandShake } from '@/shared/icons/HandShake'
import { Truck } from '@/shared/icons/Truck'

interface ProgressBarProps {
  currentStep: number
}

const steps = [
  { id: 1, label: 'Заказ создан', icon: <Notebook /> },
  { id: 2, label: 'Упакован', icon: <Package /> },
  { id: 3, label: 'В дороге', icon: <Truck /> },
  { id: 4, label: 'Вручен', icon: <HandShake /> },
]

export const OrderProgressBar = ({ currentStep }: ProgressBarProps) => {
  return (
    <div className={s.progressContainer}>
      <div className={s.progressBar}>
        <div className={s.progressFill} style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }} />
        {steps.map(step => (
          <div
            key={step.id}
            className={`${s.stepCircle} ${step.id === 1 || step.id === 4 ? s.withCheck : ''}`}
            style={{
              left: `${((step.id - 1) / (steps.length - 1)) * 100}%`,
              backgroundColor: step.id <= currentStep ? 'var(--purple-color)' : 'var(--el-color)',
            }}
          />
        ))}
      </div>
      <div className={s.stepsLabels}>
        {steps.map(step => (
          <div
            key={step.id}
            className={`${s.stepLabel} df fdc aic`}
            style={{
              opacity: step.id <= currentStep ? 1 : 0.7,
            }}
          >
            {step.icon}
            <p>{step.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
