import Footer from "./components/footer/footer";
import HomePage from "./components/Home/home";
import { NavBar } from "./components/navbar/navbar";

export default function Home() {
  return (
    <>
      <NavBar />

      <main>
        <HomePage />
      </main>

      <Footer />
    </>
  );
}
