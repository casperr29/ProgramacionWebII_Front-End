import { Category } from "../category/index";

export const ListOfCategory = ({
  categories = []
}) =>
(
  categories.map(x => <Category {...x}></Category>)
);
