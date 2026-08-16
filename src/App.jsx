import { useState } from "react";
import { cardList } from "./mockc/tasks";
import './App.css';
import PopBrowse from './components/PopBrowse/PopBrowse';
import PopExit from './components/PopExit/PopExit';
import PopNewCard from './components/PopNewCard/PopNewCard';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

const ststusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function App() {

  const [cards, setCards] = useState(cardList);

  const addCard = () => {
    const card = {
      id: Math.max(...cards.map((card) => card.id)) + 1,
      topic: "Web Design",
      title: "Название новой задачи",
      date: new Date().toLocaleDateString(),
      status: "Без статуса",
    };
    setCards((prev) => [...prev, card]);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div class="wrapper">

			<PopExit />

			<PopNewCard />

			<PopBrowse />

		  <Header addCard={addCard} />

		  <Main>
        {isLoading ? (
          <div class="loading">Данные загружаются...</div>
        ) : (
          statusList.map((status) => (
            <column
              key={status}
              title={status}
              cardList={cardList.filter((card) => card.status === status)}
            />
          ))
        )}
      </Main>

    </div>
  )
};

export default App;
