import Header from "../../components/Header";
import Main from "../../components/Main";
import Card from "../../components/Card";

import { useEffect, useState } from "react";
import { IHeaderProps } from "../../assets/interfaces";
import { UtilityService } from "../../helpers/Services/UtilityService.ts";

const utilityService = new UtilityService();

const Utility = ({ isOpen, setIsOpen, onClose }: IHeaderProps) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    utilityService.getAll().then((response) => {
      setCards(response.data);
    });
  });

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose} />
      <Main>
        {cards.map((element: any) => {
          return <Card content={element} key={element.id} />;
        })}
      </Main>
    </>
  );
};

export default Utility;