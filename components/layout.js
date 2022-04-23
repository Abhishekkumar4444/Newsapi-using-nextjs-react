import Hero from "./Hero";
import Navbar from "./Navbar";

function layout({ children }) {
  return (
    <div>
      <Navbar />
      <Hero />
      <main> {children}</main>
    </div>
  );
}

export default layout;
