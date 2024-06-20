import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import './App.css'

// pages
import { Home } from "./pages/Home.tsx"
import { Create } from "./pages/Create.tsx"
import { Update } from "./pages/Update.tsx"


export const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <h1>Supa Smoothies</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Create New Smoothie</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  )
}
