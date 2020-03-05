import React from 'react'
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  IconButton,
  Table,
  TableContainer,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core'
import { Delete, ExpandMore } from '@material-ui/icons'
import { TABLE_HEADER } from '../../core/constants/values'

const List = ({ expanded, handleExpantion, handleDelete, employee }) => {
  return (
      <ExpansionPanel expanded={expanded} onChange={handleExpantion}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMore />}
        >
          <Typography>{employee.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">Delete register</TableCell>
                  <TableCell align="right">
                    <IconButton aria-label="delete" onClick={() => handleDelete(employee)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
                {
                  TABLE_HEADER.map(({ name, propertyKey }) => (
                    <TableRow key={name}>
                      <TableCell component="th" scope="row">
                        {name}
                      </TableCell>
                      <TableCell align="right">{employee[propertyKey]}</TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>
  );
}

export default List
