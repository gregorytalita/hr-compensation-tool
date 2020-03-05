import React from 'react'
import { Step, StepLabel, StepConnector } from '@material-ui/core'
import { StyledStepper, Circle, StepperWrapper, StyledCheck } from './style'

const StepIcon = ({ active, completed }) => (
  <StepperWrapper active={active}>
    {completed ? <StyledCheck /> : <Circle />}
  </StepperWrapper>
)

const Stepper = ({ activeStep = 1, steps = [] }) => (
  <StyledStepper alternativeLabel activeStep={activeStep} connector={<StepConnector />}>
    {steps.map(label => (
      <Step key={label}>
        <StepLabel StepIconComponent={StepIcon}>
          {label}
        </StepLabel>
      </Step>
    ))}
  </StyledStepper>
)

export default Stepper
