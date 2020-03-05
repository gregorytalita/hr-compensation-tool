import React from 'react'
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const List = ({ expanded, handleExpantion, deleteEmployee, employee }) => {
  return (
      <ExpansionPanel expanded={expanded} onChange={handleExpantion}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>{employee.name}</Typography>
          <Typography>Monthly compoensation is {employee.compensation || 'Not informed'}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {employee.name} do {employee.distance} from home to work {employee.days} days a week using the {employee.transport} as transport.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
  );
}

export default List
