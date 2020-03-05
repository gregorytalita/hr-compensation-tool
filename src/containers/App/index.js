import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { Wrapper } from './style'
import { Stepper } from '../../components'
import ExportDataStep from '../ExportDataStep'
import AddRecordStep from '../AddRecordStep'

const App = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [employees, setEmployees] = useState([])

  const handleStepNext = () => setActiveStep(prevActiveStep => prevActiveStep + 1)

  const handleStepBack = () => setActiveStep(prevActiveStep => prevActiveStep - 1)

  const addEmployee = (employeeObject) => setEmployees(currentEmployees => [ ...currentEmployees, employeeObject])

  const deleteEmployee = (employeeReference) => {
    const currentEmployees = employees.filter(employee => employee !== employeeReference)
    
    setEmployees(currentEmployees)
  }

  const steps = [
    <AddRecordStep handleForm={addEmployee} handleStepNext={handleStepNext}/>,
    <ExportDataStep handleAddMore={handleStepBack} employeesList={employees} handleDelete={deleteEmployee}/>,
  ]

  return (
    <Wrapper>
      <Stepper activeStep={activeStep} steps={['Add Data', 'Export']}/>
      <SwipeableViews
        axis='x'
        index={activeStep}
      >
        {steps.map((step, index) => (
          Math.abs(activeStep - index) <= 2 && (
            step
          )
        ))}
      </SwipeableViews>
    </Wrapper>
  )
}

export default App
