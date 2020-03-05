import { MONTH_WEEkS, DAILY_TRIPS } from '../constants/values'

export const getCompensationValue = (transport) => {
  switch(transport) {
    case 'bike':
      return 0.5
    case 'car':
      return 0.1
    default: 
      return 0.25
  }
}

export const distanceCompensation = (distance, compensation, double = false) => {
  const compensationTreated = double ? compensation * 2 : compensation
  
  return distance * compensationTreated
}

export const weeklyDistance = (distance, days) => (distance * days) * DAILY_TRIPS

export const monthlyDistance = (distance, days) => (distance * days) * (DAILY_TRIPS * MONTH_WEEkS)

export const isDouble = (transport, distance) => transport === 'bike' && (distance >= 5 && distance <= 10)
