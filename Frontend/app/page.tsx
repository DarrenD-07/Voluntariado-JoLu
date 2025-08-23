"use client"

import { useState } from "react"
import ModernNavBar from "../components/ModernNavBar"
import QuienesSomos from "../components/QuienesSomos"


export default function HomePage() {
  const [fileContent, setFileContent] = useState("")
  const [responseContent, setResponseContent] = useState("")
  const [errorList, setErrorList] = useState([])
  const [showQuienesSomos, setShowQuienesSomos] = useState(false)
  const [showContactanos, setShowContactanos] = useState(false);

  return (
    <div className="min-h-screen">
      <ModernNavBar
              fileContent={fileContent}
              setFileContent={setFileContent}
              responseContent={responseContent}
              setResponseContent={setResponseContent}
              errorList={errorList}
              //setErrorList={setErrorList}
              showQuienesSomos={showQuienesSomos}
              setShowQuienesSomos={setShowQuienesSomos} setErrorList={function (errors: any[]): void {
                  throw new Error("Function not implemented.")
              } }      />
      {showQuienesSomos && <QuienesSomos />}

    </div>
  )
}
