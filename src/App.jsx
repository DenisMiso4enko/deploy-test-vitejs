import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addCustomer,
  removeCustomer,
} from "./redux/actionCreators/customersActionCreators.js";
import { fetchCustomers } from "./redux/asyncAction/customers.js";

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
  const handleAddCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomer(customer));
  };
  const handleRemoveCustomer = (customer) => {
    dispatch(removeCustomer(customer.id));
  };
  return (
    <div className="App">
      <h1>{cash}</h1>
      <button onClick={() => addCash(50)}>Пополнить</button>
      <button onClick={() => getCash(5)}>Снять</button>
      <button onClick={() => handleAddCustomer(prompt())}>
        Добавить клиента
      </button>
      <button onClick={() => dispatch(fetchCustomers())}>
        Получить всех клиентов из базы
      </button>

      {customers.length ? (
        <div>
          {customers.map((customer, index) => (
            <div
              key={customer.id}
              onClick={() => handleRemoveCustomer(customer)}
            >
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
