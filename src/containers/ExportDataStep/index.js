import React from 'react'
import { 
  Button,
  Typography
} from '@material-ui/core'
import { Card, List } from '../../components'

const AddRecordStep = ({ handleAddMore, employeesList, handleDelete }) => {
  const exportToCSV = () => {

  }

  return (
    <Card>
      <Typography variant='h2'>
        Export compensation report
      </Typography>
      {
        employeesList.map(employee => (
          <List employee={employee} handleDelete={handleDelete}/>
        ))
      }

      <Button variant='outlined' color='secondary' onClick={handleAddMore}>
        Add Employee
      </Button>
      <Button variant='outlined' color='secondary' onClick={exportToCSV}>
        Export CSV
      </Button>
    </Card>
  )
}

export default AddRecordStep
