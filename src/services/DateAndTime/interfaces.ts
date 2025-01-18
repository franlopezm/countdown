import { DateTime, DurationObjectUnits } from 'luxon'

export type DateOption = string | DateTime

export interface DurationFromDateResponse {
  isSince: boolean
  duration: DurationObjectUnits
}
