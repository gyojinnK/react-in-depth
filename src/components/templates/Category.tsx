import { Link } from "react-router-dom";
import { CardContents } from "../../constants/CategoryData";
import Container from "../atoms/Container";
import Title from "../atoms/Title";
import CategoryCard from "../molecules/CategoryCard";

const Category = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center">
      <Container>
        <Title className="self-start pb-8">Category</Title>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 ">
          {CardContents.map((item) => (
            <Link to={item.path}>
              <CategoryCard key={item.id} className={`${item.bgColor}`}>
                <CategoryCard.CardTitle className={item.textColor}>
                  {item.title}
                </CategoryCard.CardTitle>
                <CategoryCard.CardDescription className={item.textColor}>
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
