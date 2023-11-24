"use client"
import { useState } from "react"

// All components and pages are by default: SERVER

interface Student {
  name: string
  age: number
  isTired: boolean
}

export default function Home() {
  // useState hook
  const [name, setName] = useState<string>("")
  const [student, setStudent] = useState<Student>({
    name: "Benny",
    age: 15,
    isTired: true,
  })
  const [apiData, setApiData] = useState<string>("")

  const testClick = async () => {
    console.log("I AM BEING CLICKED!")

    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")

    // True === 200 OK
    if (response.status) {
    }

    setApiData(JSON.stringify(await response.json()))
    console.log(apiData)
  }

  return (
    <div className=" flex flex-col h-screen">
      <header className="bg-blue-700 space-x-4 p-4 flex justify-center items-center font-extrabold">
        <h1>About me</h1>
        <h1>{apiData}</h1>
        <h1>{`${student.name} ${student.age} ${student.isTired}`}</h1>
        <h1>{name}</h1>
      </header>

      {/* BODY */}
      <main className=" space-y-4 flex flex-1 flex-col justify-center items-center bg-slate-700 m-4 p-4">
        <p className="bg-slate-500 p-4 rounded-lg transition-transform hover:scale-125">
          Item 1
        </p>
        <p className="bg-slate-400 p-4">Item 2</p>
        <p className="bg-slate-600 p-4">Item 3</p>

        {/* Button */}
        <p
          onClick={() => {
            setName("Benny")
          }}
          className="bg-blue-600  rounded-md hover:bg-blue-500 hover:cursor-pointer font-bold"
        >
          Change name to Benny
        </p>

        {/* Fetch */}
        <p
          onClick={testClick}
          className="bg-blue-600  rounded-md hover:bg-blue-500 hover:cursor-pointer font-bold"
        >
          Fetch data
        </p>
      </main>

      <footer className="bg-blue-700 p-4 flex justify-center items-center font-extrabold">
        <p>click me link, copyright...</p>
      </footer>
    </div>
  )
}
