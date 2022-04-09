import React from "react"
type LayoutProps = {
  children: JSX.Element
}

export const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full flex justify-center h-available items-center">
      {children}
    </div>
  )
}
