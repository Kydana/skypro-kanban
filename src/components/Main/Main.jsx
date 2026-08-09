import { cardList } from "@/mockc/tasks";

function Main() {
  const CardsNoStatus = cardList.filter(
    (card) => card.status === "Без статуса",
  );
  const CardsNeedToBeDone = cardList.filter(
    (card) => card.status === "Нужно сделать",
  );
  const CardsAtWork = cardList.filter(
    (card) => card.status === "В работе",
  );
  const CardsTesting = cardList.filter(
    (card) => card.status === "Тестирование",
  );
  const CardsDone = cardList.filter(
    (card) => card.status === "Готово",
  );

  return (
    <main class="main">
      <div class="container">
        <div class="main__block">
          <div class="main__content">
            <column title="Без статуса" cards={CardsNoStatus} />
            <column title="Нужно сделать" cards={CardsNeedToBeDone} />
            <column title="В работе" cards={CardsAtWork} />
            <column title="Тестирование" cards={CardsTesting} />
            <column title="Готово" cards={CardsDone} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main;
