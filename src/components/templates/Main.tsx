import Container from "../atoms/Container";

const Main = () => {
  return (
    <div className="bg-primaryG animate-gradient bg-[length:400%_400%] w-screen h-screen">
      <Container className="text-white flex flex-col justify-center items-center h-full">
        <h1 className="font-mont text-9xl pb-12 font-bold opacity-[0.5]">
          Front In Depth
        </h1>
      </Container>
    </div>
  );
};

export default Main;
