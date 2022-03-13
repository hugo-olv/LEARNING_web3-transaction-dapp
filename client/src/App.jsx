import { Navbar, Welcome, Footer, Services, Transactions } from "./components"

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <h1>test</h1>
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
