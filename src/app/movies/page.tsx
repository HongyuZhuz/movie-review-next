import CardList from "../ui/cardList";
import Form from "../ui/form";

export default function Home() {
  console.log("start form")
    return (
      <div>
        <div>
          <Form/>
        </div>
        <div>
          <CardList />
        </div>
      </div>
    );
  }