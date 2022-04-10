import { apiInstance } from "./apiInstance"
import { AxiosResponse } from "axios"
import { GetTokenResponseType } from "../types/GetTokenResponseType"
import { GetCalendarListResponseType } from "../types/GetCalendarListResponseType"

export class ApiExecutor {
  public getGoogleAccessToken(
    clientId: string,
    authCode: string,
    clientSecret: string
  ): Promise<AxiosResponse<GetTokenResponseType>> {
    return apiInstance.post(
      `https://oauth2.googleapis.com/token?client_id=${clientId}&&code=${authCode}&&grant_type=authorization_code&&client_secret=${clientSecret}&&redirect_uri=https://ruila.github.io/google-calendar-filter/&&prompt=consent`
    )
  }

  public getCalendarList(): Promise<
    AxiosResponse<GetCalendarListResponseType>
  > {
    return apiInstance.get(
      `https://www.googleapis.com/calendar/v3/users/me/calendarList`
    )
  }
}
