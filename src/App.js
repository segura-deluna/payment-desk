import NewCost from './components/New Cost/NewCost';
import Costs from './components/Costs/Costs';

const App = () => {

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
      <h1>Доска расходов</h1>
      <NewCost />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
