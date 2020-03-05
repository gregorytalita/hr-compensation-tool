
import styled from 'styled-components'
import { Stepper } from '@material-ui/core'
import Check from '@material-ui/icons/Check'

export const StyledStepper = styled(Stepper)`
  width: 100%;    
  border-radius: 24px;
  box-shadow: 0px 4px 32px rgba(61, 61, 61, 0.1);
  margin: 32px;
`
export const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: currentColor;
`
export const StepperWrapper = styled.div`
  color: ${props => props.active ? '#784af4' : '#eaeaf0'};
  display: flex;
  height: 22px;
  align-items: center;
`

export const StyledCheck = styled(Check)`
  color: #784af4;
  z-index: 1;
  font-size: 18px;
`
