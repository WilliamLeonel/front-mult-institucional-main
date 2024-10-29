import { IHeaderProps } from "../../assets/interfaces";
import Header from "../../components/Header";
import MainHome from "../../components/MainHome";


const Home = ({ isOpen, setIsOpen, onClose }: IHeaderProps) => {
  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose} />
      <MainHome />
    </>
  );
};

export default Home;