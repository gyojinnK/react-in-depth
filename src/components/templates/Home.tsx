import Container from "../atoms/Container";
import SubTitle from "../atoms/SubTitle";

const Home = () => {
  return (
    <div className="bg-primaryG animate-gradient bg-[length:400%_400%] w-screen h-screen">
      <Container className="text-white flex flex-col justify-center items-center h-full">
        <h1 className="font-mont text-9xl pb-12 font-bold opacity-[0.5]">
          Front In Depth
        </h1>
        <div className="rounded-lg backdrop-blur-md bg-[rgba(255,255,255,0.1)] px-4 py-1 w-fit ">
          <SubTitle className="text-body3 text-neutral-50">
            The Growth Journey of{" "}
            <a
              href="https://github.com/gyojinnK"
              target={"_blank"}
              className="inline-block text-blue-600 underline"
            >
              GyojinnK
            </a>{" "}
            in Frontend Development
          </SubTitle>
        </div>
      </Container>
    </div>
  );
};

export default Home;
