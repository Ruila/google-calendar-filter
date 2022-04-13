import { apiInstance } from "./apiInstance"
import { GetTokenResponseType } from "../types/GetTokenResponseType"
import { GetCalendarListResponseType } from "../types/GetCalendarListResponseType"
import { GetCalendarbyIdResponseType } from "../types/GetCalendarbtIdResponseType"

export class ApiExecutor {
  public getGoogleAccessToken(
    clientId: string,
    authCode: string,
    clientSecret: string
  ): Promise<GetTokenResponseType> {
    return apiInstance.post(
      `https://oauth2.googleapis.com/token?client_id=${clientId}&&code=${authCode}&&grant_type=authorization_code&&client_secret=${clientSecret}&&redirect_uri=https://ruila.github.io/google-calendar-filter/&&prompt=consent`
    )
  }

  public getCalendarList(): Promise<GetCalendarListResponseType> {
    return apiInstance.get(
      `https://www.googleapis.com/calendar/v3/users/me/calendarList`
    )
  }

  public getCalendarById(
    id: string,
    start: Date,
    end: Date
  ): Promise<GetCalendarbyIdResponseType> {
    return apiInstance.get(
      `https://www.googleapis.com/calendar/v3/calendars/${id}/events?timeMax=${end}&timeMin=${start}&singleEvents=true`
    )
  }
}
