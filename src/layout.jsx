import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
    <Header />
    <main style={{
      backgroundColor: "white",
      // width: "100vw",
      height: `calc(100vh - 170px)`


    }}>

      <Outlet />
    </main>
    <Footer />
  </>
  )
}

export { Layout }; 