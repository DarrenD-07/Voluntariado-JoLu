"use client"

import { useRef, useState, useEffect } from "react"
import AreadeTexto1 from "./AreadeTexto1"
import AreadeTexto2 from "./AreadeTexto2"

const NavBar = () => {
  const fileInputRef = useRef(null)
  const [fileContent, setFileContent] = useState("")
  const [responseContent, setResponseContent] = useState("")
  const [errorList, setErrorList] = useState([])

  // Efecto para cargar el estado desde localStorage
  useEffect(() => {
    const savedFileContent = localStorage.getItem("fileContent")
    const savedResponseContent = localStorage.getItem("responseContent")
    const savedErrorList = localStorage.getItem("errorList")

    if (savedFileContent) {
      setFileContent(savedFileContent)
    }
    if (savedResponseContent) {
      setResponseContent(savedResponseContent)
    }
    if (savedErrorList) {
      setErrorList(JSON.parse(savedErrorList))
    }
  }, [])

  // Efecto para guardar el estado en localStorage
  useEffect(() => {
    localStorage.setItem("fileContent", fileContent)
    localStorage.setItem("responseContent", responseContent)
    localStorage.setItem("errorList", JSON.stringify(errorList))
  }, [fileContent, responseContent, errorList])

  const handleFileButtonClick = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file && file.name.endsWith(".smia")) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const content = e.target.result
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

  // Función para limpiar todo
  const handleClearButtonClick = () => {
    setFileContent("")
    setResponseContent("")
    setErrorList([])
    localStorage.removeItem("fileContent")
    localStorage.removeItem("responseContent")
    localStorage.removeItem("errorList")

    // Limpiar también el input de archivo
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const sendDataToBackend = (data) => {
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
        const resultado = data.consola
        const errores = data.tablaError
        setResponseContent(resultado)
        setErrorList(errores)
      })
      .catch((error) => console.error("Error al enviar datos al backend:", error))
  }

  return (
    <div>
      <nav
        style={{
          marginBottom: "20px",
          backgroundImage: "linear-gradient(to right, black,lightblue)",
          padding: "10px",
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={handleFileButtonClick}>¿Quienes somos?</button>
        <button onClick={handleExecuteButtonClick}>Nosotros</button>
        <button onClick={handleClearButtonClick}>Pilar Salud Mental</button>
        <button onClick={handleClearButtonClick}>Pilar Juventud</button>
        <button onClick={handleClearButtonClick}>Pilar Diversidad</button>
        <button onClick={handleClearButtonClick}>Contacto</button>
      </nav>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <AreadeTexto1 fileContent={fileContent} setFileContent={setFileContent} />
        <AreadeTexto2 responseContent={responseContent} />
      </div>
    </div>
  )
}

export default NavBar
