import CostItem from './components/CostItem';

function App() {

  const costs = [
    {
      date:new Date(2021, 2, 12),
      description:'Холодильник',
      amount: 999.99,
    },{
      date:new Date(2021, 5, 1),
      description:'Yoga Book',
      amount: 1050.99,
    },{
      date:new Date(2021, 10, 19),
      description:'Джинсы',
      amount: 50.25,
    },
  ]

  return (
    <div>
      <h1>Начнём писать доску расходов!</h1>
      <CostItem
          date={costs[0].date}
          description={costs[0].description}
          amount={costs[0].amount}
      />
      <CostItem
          date={costs[1].date}
          description={costs[1].description}
          amount={costs[1].amount}
      />
      <CostItem
          date={costs[2].date}
          description={costs[2].description}
          amount={costs[2].amount}
      />
    </div>
  );
}

export default App;
