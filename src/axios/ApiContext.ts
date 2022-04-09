import { ApiExecutor } from "./ApiExecutor"

let apiExecutor: ApiExecutor

export class ApiContext {
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

  public static getAuthCode(): string {
    return sessionStorage.getItem("auth-code") || ""
  }

  public static setAuthCode(token: string): void {
    sessionStorage.setItem("auth-code", token)
  }

  public static getClientId(): string {
    return sessionStorage.getItem("client-id") || ""
  }

  public static setClientId(token: string): void {
    sessionStorage.setItem("client-id", token)
  }

  public static getClientSecret(): string {
    return sessionStorage.getItem("client-secret") || ""
  }

  public static setClientSecret(token: string): void {
    sessionStorage.setItem("client-secret", token)
  }
}
