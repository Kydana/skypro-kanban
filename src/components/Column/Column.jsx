import Card from "../Card/Card";

function Column({ title, cardList }) {
  return (
    <div class="main__column">
      <div class="column__title">
        <p>{title}</p>
      </div>
      <div class="cards">
        {cardList.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            topic={card.topic}
            date={card.date}
          />
        ))}
      </div>
    </div>
  )
}

export default Column;
