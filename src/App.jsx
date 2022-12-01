import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);
  console.log(customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };
  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch({ type: "ADD_CUSTOMER", payload: customer });
  };
  const removeCustomer = (customer) => {
    console.log(customer.id);
    dispatch({ type: "REMOVE_CUSTOMER", payload: customer.id });
  };
  return (
    <div className="App">
      <h1>{cash}</h1>
      <button onClick={() => addCash(50)}>Пополнить</button>
      <button onClick={() => getCash(5)}>Снять</button>
      <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
      {customers.length ? (
        <div>
          {customers.map((customer, index) => (
            <div key={customer.id} onClick={() => removeCustomer(customer)}>
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div>Клиентов нету</div>
      )}
    </div>
  );
}

export default App;
