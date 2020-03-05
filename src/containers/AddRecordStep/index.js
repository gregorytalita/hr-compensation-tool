import React, { useState } from 'react'
import { 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  TextField,
  Button,
  Typography,
  Box
} from '@material-ui/core'
import { Card } from '../../components'
import { getCompensationValue, distanceCompensation, monthlyDistance, isDouble } from '../../core/functions'
import { TRANSPORT_OPTIONS } from '../../core/constants/values'

const AddRecordStep = ({ handleForm, handleStepNext }) => {
  const [data, setData] = useState({})

  const handleSubmit = () => {
    const compensationValue = getCompensationValue(data.transport.toLowerCase())
    const doubleValue = isDouble(data.transport.toLowerCase(), data.distance)
    
    const distancePerMonth = monthlyDistance(data.distance, data.days)
    const monthlyCompensation = distanceCompensation(monthlyDistance, compensationValue, doubleValue) * 2

    handleForm({
      ...data,
      distancePerMonth,
      monthlyCompensation
    })

    setData({})
    handleStepNext()
  }

  return (
    <Card>
      <Typography variant='h2'>
        Employee Information
      </Typography>
      <TextField 
        fullWidth
        label='Employee name'
        margin='normal' 
        value={data.name}
        onChange={({ target }) => setData(currentData => ({ ...currentData, name: target.value}))}
      />

      <TextField
        fullWidth
        label="Payment Day"
        type="number"
        margin='normal'
        defaultValue={new Date().getDay()}
        onChange={({ target }) => setData(currentData => ({ ...currentData, paymentDay: target.value}))}
      />

      <FormControl fullWidth>
        <InputLabel id='transportInput'>Transport</InputLabel>
        <Select
          id='transportInput'
          value={data.transport}
          onChange={({ target }) => setData(currentData => ({ ...currentData, transport: target.value}))}
        >
          {
            TRANSPORT_OPTIONS.map(option => <MenuItem value={option}>{option}</MenuItem>)
          }
        </Select>
      </FormControl>

      <TextField 
        fullWidth
        label='One way distance'
        margin='normal' 
        value={data.distance}
        type='number'
        onChange={({ target }) => setData(currentData => ({ ...currentData, distance: target.value}))}
      />

      <TextField 
        fullWidth
        label='Weekly working days'
        margin='normal' 
        value={data.days}
        type='number'
        onChange={({ target }) => setData(currentData => ({ ...currentData, days: target.value}))}
      />

      <Box display="flex" justifyContent="flex-end">
        <Button variant='outlined' color='secondary' onClick={
          Object.entries(data).length ? handleSubmit : null
        }>
          Save
        </Button>
      </Box>
    </Card>
  )
}

export default AddRecordStep
