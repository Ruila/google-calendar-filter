import { ApiExecutor } from "./ApiExecutor"

let apiExecutor: ApiExecutor

export class AppContext {
  public static get GoogleCalendarFilterExecutor(): ApiExecutor {
    if (!apiExecutor) {
      apiExecutor = new ApiExecutor()
    }

    return apiExecutor
  }

  public static getAccessToken(): string {
    return sessionStorage.getItem("access-token") || ""
  }

  public static setAccessToken(token: string): void {
    sessionStorage.setItem("access-token", token)
  }
}
