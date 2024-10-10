import { Outlet } from "react-router-dom";
import Header from "./components/organisms/Header";
import Container from "./components/atoms/Container";

function App() {
  return (
    <div className="relative">
      <Container>
        <Header />
      </Container>
      <Outlet />
    </div>
  );
}

export default App;
