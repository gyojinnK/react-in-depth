import React from "react";
import { cm } from "../../util/cm";
import Title from "../atoms/Title";
import Card from "../atoms/Card";

type CategoryProps = {
  className?: string;
  children: React.ReactNode;
};

type TitleProps = {
  className?: string;
  children: React.ReactNode;
};

type DescriptionProps = {
  className?: string;
  children: React.ReactNode;
};

const CategoryCard = ({ className, children }: CategoryProps) => {
  return <Card className={cm("", className)}>{children}</Card>;
};

const CardTitle = ({ className, children }: TitleProps) => {
  return <Title className={cm("pb-4", className)}>{children}</Title>;
};

const CardDescription = ({ className, children }: DescriptionProps) => {
  return <p className={cm("whitespace-break-spaces", className)}>{children}</p>;
};

CategoryCard.CardTitle = CardTitle;
CategoryCard.CardDescription = CardDescription;

export default CategoryCard;
