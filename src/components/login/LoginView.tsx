import React, {useState} from "react";
import TextField from '@mui/material/TextField';

export const LoginView: React.FunctionComponent = () => {
    const [clientId, setClientId] = useState("")
    const [clientSecret, setClientSecret] = useState("")
    const [authCode, setAuthCode] = useState("")
    const access_type = "offline"
    const prompt = "consent"
    const redirect_uri = "https://ruila.github.io/google-calendar-filter/"
    const handleChangeClientId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setClientId(e.target.value)
    }
    const handleChangeClientSecret = (e: React.ChangeEvent<HTMLInputElement>) => {
        setClientSecret(e.target.value)
    }
    const handleChangeAuthCode = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAuthCode(e.target.value)
    }
    const getToken = () => {
        fetch( `https://oauth2.googleapis.com/token?code=${authCode}&client_id=${clientId}&grant_type=authorization_code&client_secret=${clientSecret}&redirect_uri=${redirect_uri}&prompt=consent`, {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        })
            .then(res => res.json())
            .then(data => {
                console.info("aaa", data)
            })
            .catch(() => {
            })
    }
    return <div>
        <div className="my-4">
            <TextField value={clientId} onChange={handleChangeClientId} label="clientId" variant="outlined" />
            <TextField value={clientSecret} onChange={handleChangeClientSecret} label="clientSecret" variant="outlined" />
            <TextField value={authCode} onChange={handleChangeAuthCode} label="authCode" variant="outlined" />
        </div>
        <div>
            <a href={`https://accounts.google.com/o/oauth2/auth?response_type=code&&client_id=${clientId}&&redirect_uri=${redirect_uri}&&scope=profile&&access_type=${access_type}&&prompt=${prompt}`}>login</a>
        </div>
        <div className="mt-4" onClick={getToken}>
            get token
        </div>

    </div>
}