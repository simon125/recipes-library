import { FC } from "react";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { ScrollUpButton } from "../../components/ScrollUpButton/ScrollUpButton";

export const Home: FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <ScrollUpButton />
    </>
  );
};
