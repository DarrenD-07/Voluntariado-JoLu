"use client"

import type React from "react"
import { useRef, useEffect } from "react"

interface ModernNavBarProps {
  fileContent: string
  setFileContent: (content: string) => void
  responseContent: string
  setResponseContent: (content: string) => void
  errorList: any[]
  setErrorList: (errors: any[]) => void
  showQuienesSomos: boolean
  setShowQuienesSomos: (show: boolean) => void
}

const ModernNavBar: React.FC<ModernNavBarProps> = ({
  fileContent,
  setFileContent,
  responseContent,
  setResponseContent,
  errorList,
  setErrorList,
  showQuienesSomos,
  setShowQuienesSomos,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const savedFileContent = localStorage.getItem("fileContent")
    const savedResponseContent = localStorage.getItem("responseContent")
    const savedErrorList = localStorage.getItem("errorList")

    if (savedFileContent) setFileContent(savedFileContent)
    if (savedResponseContent) setResponseContent(savedResponseContent)
    if (savedErrorList) setErrorList(JSON.parse(savedErrorList))
  }, [])

  useEffect(() => {
    localStorage.setItem("fileContent", fileContent)
    localStorage.setItem("responseContent", responseContent)
    localStorage.setItem("errorList", JSON.stringify(errorList))
  }, [fileContent, responseContent, errorList])

  const handleFileButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.name.endsWith(".smia")) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const content = e.target?.result as string
        setFileContent(content)
      }
      reader.readAsText(file)
    } else {
      console.log("Por favor selecciona un archivo con extensión .smia")
    }
  }

  const handleExecuteButtonClick = () => {
    sendDataToBackend(fileContent)
  }

  const handleClearButtonClick = () => {
    setFileContent("")
    setResponseContent("")
    setErrorList([])
    localStorage.removeItem("fileContent")
    localStorage.removeItem("responseContent")
    localStorage.removeItem("errorList")

    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const sendDataToBackend = (data: string) => {
    const backendUrl = "http://localhost:4000/interpretar"
    fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ entrada: data }),
    })
      .then((response) => response.json())
      .then((data) => {
        setResponseContent(data.consola)
        setErrorList(data.tablaError)
      })
      .catch((error) => console.error("Error al enviar datos al backend:", error))
  }

  return (
    <div>
      <nav className="bg-gradient-to-r from-[#fb8500] to-[#ffb703] p-6 shadow-lg">
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <button
            onClick={() => setShowQuienesSomos(!showQuienesSomos)}
            className={`px-8 py-4 text-xl font-bebas tracking-wider text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${
              showQuienesSomos ? "bg-[#023047] shadow-lg" : "bg-[#023047]/80 hover:bg-[#023047]"
            }`}
          >
            ¿QUIÉNES SOMOS?
          </button>

          <button
            onClick={handleExecuteButtonClick}
            className="px-8 py-4 text-xl font-bebas tracking-wider text-white bg-[#023047]/80 hover:bg-[#023047] rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            NOSOTROS
          </button>

          <button
            onClick={handleClearButtonClick}
            className="px-8 py-4 text-xl font-bebas tracking-wider text-white bg-[#023047]/80 hover:bg-[#023047] rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            PILAR SALUD MENTAL
          </button>

          <button
            onClick={handleClearButtonClick}
            className="px-8 py-4 text-xl font-bebas tracking-wider text-white bg-[#023047]/80 hover:bg-[#023047] rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            PILAR JUVENTUD
          </button>

          <button
            onClick={handleClearButtonClick}
            className="px-8 py-4 text-xl font-bebas tracking-wider text-white bg-[#023047]/80 hover:bg-[#023047] rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            PILAR DIVERSIDAD
          </button>

          <button
            onClick={handleClearButtonClick}
            className="px-8 py-4 text-xl font-bebas tracking-wider text-white bg-[#023047]/80 hover:bg-[#023047] rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            
          >
            CONTACTO
          </button>
        </div>

        {/* Logo placeholder */}
        <div className="absolute top-4 right-6 text-2xl font-bebas text-[#023047] bg-white/20 px-4 py-2 rounded-lg">
        logito
        </div>
      </nav>

      {/* Input oculto para archivos */}
      <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".smia" style={{ display: "none" }} />
    </div>
  )
}

export default ModernNavBar
