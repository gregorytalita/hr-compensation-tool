import React from 'react'
import Papa from 'papaparse'
import FileSaver from 'file-saver'
import { 
  Button,
  Typography
} from '@material-ui/core'
import { Card, List } from '../../components'
import { ContentWrapper, CardActions } from './style'

const AddRecordStep = ({ handleAddMore, employeesList, handleDelete }) => {
  
  const exportToCSV = () => {
    const csv = Papa.unparse(employeesList)
    const csvBlob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })

    FileSaver.saveAs(csvBlob, 'employees-compensation.csv')
  }

  return (
    <Card>
      <Typography variant='h2'>
        Export compensation report
      </Typography>
      <ContentWrapper>
        {
          employeesList.map(employee => (
            <List employee={employee} handleDelete={handleDelete}/>
          ))
        }
      </ContentWrapper>
      <CardActions display='flex' justifyContent='flex-end'>
        <Button variant='outlined' onClick={handleAddMore}>
          Add Employee
        </Button>
        {
          employeesList.length > 0 && 
          <Button variant='outlined' color='secondary' onClick={exportToCSV}>
            Export CSV
          </Button>
        }
      </CardActions>
    </Card>
  )
}

export default AddRecordStep
