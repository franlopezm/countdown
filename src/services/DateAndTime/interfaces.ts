import { DateTime, DurationObjectUnits } from 'luxon'

export type DateOption = string | DateTime

export interface DurationFromDateResponse {
  isAfter: boolean
  duration: DurationObjectUnits
}
