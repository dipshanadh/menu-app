import { useState } from "react";
import { Title, Menu, Categories } from "./components";

import data from "./data";

const categories = ["all", ...new Set(data.map(item => item.category))];

const App = () => {
  const [items, setItems] = useState(data);

  const filterItems = category => {
    if (category === "all") {
      setItems(data);
      return;
    }

    const newItems = data.filter(item => item.category === category);

    setItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={items} />
      </section>
    </main>
  );
};

export default App;
