import { Link } from "react-router-dom";
import Container from "../atoms/Container";

const ErrorPage = () => {
  return (
    <Container>
      <div className="h-screen flex flex-col justify-center items-center gap-8">
        <h1 className="font-mont text-6xl font-bold opacity-[0.5]">Not Yet!</h1>
        <div className="flex flex-col justify-start items-center bg-gray-400/10 backdrop-blur rounded-lg py-4 px-8">
          <p>아직 페이지가 없습니다. 열심히 개발할게요!</p>
        </div>
        <Link to={"/"} className="underline hover:text-blue-500">
          Home
        </Link>
      </div>
    </Container>
  );
};

export default ErrorPage;
