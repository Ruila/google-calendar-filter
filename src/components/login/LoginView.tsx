import React from "react"
import { Layout } from "../Layout"
import { CommonBox } from "../common/CommonBox"
import { SettingYourKey } from "./SettingYourKey"
import { AppContext } from "../../axios/ApiContext"

export const LoginView: React.FunctionComponent = () => {
  const clientId = AppContext.getClientId()
  const access_type = "offline"
  const prompt = "consent"
  const scopes = "https://www.googleapis.com/auth/calendar"
  const redirect_uri = "https://ruila.github.io/google-calendar-filter/"

  return (
    <Layout>
      <CommonBox>
        <div>
          <SettingYourKey />
          <div className="mt-4 flex justify-center">
            <a
              href={`https://accounts.google.com/o/oauth2/auth?response_type=code&&client_id=${clientId}&&redirect_uri=${redirect_uri}&&scope=${scopes}&&access_type=${access_type}&&prompt=${prompt}`}
            >
              <div className="flex border-solid border-[1px] border-[#0000000a] rounded-2xl shadow-lg w-[256px]">
                <div className="w-[40px] h-[40px] flex justify-center items-center">
                  <img
                    className="google-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="google"
                  />
                </div>
                <div className="flex-1 flex justify-center items-center font-bold">
                  Sign in with google
                </div>
              </div>
            </a>
          </div>
        </div>
      </CommonBox>
    </Layout>
  )
}
