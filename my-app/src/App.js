import "./styles.css";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import { TodoProvider } from "./context";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  return (
    <TodoProvider>
    <div className="App">
      <div className="container">
        <TodoListHeader />
        <TodoList />
        <Form />
      </div>
      <Footer />
    </div>
    </TodoProvider>
  );
};
