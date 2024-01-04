import Categories from "../../components/Categories/Categories";
import Cover from "../../components/Cover/Cover";
import Search from "../../components/Search/Search";
import Logo from "./../../components/Logo/Logo";
const Home = () => {
  return (
    <div>
      <Logo />
      <Cover />
      <Categories />
      <Search />
    </div>
  );
};

export default Home;
