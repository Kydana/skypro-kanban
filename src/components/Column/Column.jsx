import Card from "../Card/Card";

function Column() {
  return (
    <div class="main__column">
      <div class="column__title">
        <p>Нужно сделать</p>
      </div>
      <div class="cards">
        <Card/>
      </div>
    </div>
  )
}

export default Column;
