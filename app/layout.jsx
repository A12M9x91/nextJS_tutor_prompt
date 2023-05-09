import "@styles/globals.css";
import { Children } from "react";

export const metadata = {
    title: "Prompt",
    description: "discover and share"
}

const RootLayout = ({Children}) => {
  return (
    <html>
        <body>
            <div className="main">
                <div className="gradient"/>
            </div>
            <main className="app">
                {Children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout