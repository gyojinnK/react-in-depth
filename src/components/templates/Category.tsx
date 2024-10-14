import { Link } from "react-router-dom";
import { CardContents } from "../../constants/CategoryData";
import Container from "../atoms/Container";
import Title from "../atoms/Title";
import CategoryCard from "../molecules/CategoryCard";

const Category = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center relative">
      <Container>
        <Title className="font-mont text-9xl pb-8 font-bold text-center opacity-[0.5]">
          Category
        </Title>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 ">
          {CardContents.map((item) => (
            <Link to={item.path}>
              <CategoryCard
                key={item.id}
                className={`h-52 transition bg-black/10 text-white ${item.bgColor} ${item.textColor}`}
              >
                <CategoryCard.CardTitle>{item.title}</CategoryCard.CardTitle>
                <CategoryCard.CardDescription>
                  {item.description}
                </CategoryCard.CardDescription>
              </CategoryCard>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Category;
