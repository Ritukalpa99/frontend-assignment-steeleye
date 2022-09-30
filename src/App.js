import List from "./List";

const items =[ {
    text :"Shutter Island",
  },
  {
    text :"The Shawshank Redemption",
  },
  {
    text :"The man who knew Infinity",
  },
  {
    text :"John Wick",
  },
  {
    text :"The Lord of the Rings",
  },
]
const App = () => (
    <List items={items}/>
);

export default App;