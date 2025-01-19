import { DateTime, DurationObjectUnits } from 'luxon'

export type DurationObject = DurationObjectUnits

export type DateOption = string | DateTime

export type TimeBetweenType = 'since' | 'until'

export interface DurationFromDateResponse {
  type: TimeBetweenType
  duration: DurationObjectUnits
}
