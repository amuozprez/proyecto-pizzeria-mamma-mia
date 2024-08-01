import { createContext, useContext, useEffect, useState } from "react";

const PizzaContext = createContext();

export const usePizzas = () => useContext(PizzaContext);

export const PizzaProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const res = await fetch("pizzas.json");
        const data = await res.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error al cargar las pizzas:", error);
      }
    };
    fetchPizzas();
  }, []);

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existingPizza = prevCart.find((item) => item.id === pizza.id);
      if (existingPizza) {
        return prevCart.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...pizza, quantity: 1 }];
    });
    alert("La pizza fue agregada con éxito");
  };

  const incrementQuantity = (id) => {
    setCart(cart.map((item) => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ));
  };

  const decrementQuantity = (id) => {
    setCart(cart.reduce((acc, item) => {
      if (item.id === id) {
        if (item.quantity > 1) {
          acc.push({ ...item, quantity: item.quantity - 1 });
        }
      } else {
        acc.push(item);
      }
      return acc;
    }, []));
  };

  const removeFromCart = (id) => setCart(cart.filter((pizza) => pizza.id !== id));

  const contextValues = {
    cart,
    pizzas,
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
  };

  return (
    <PizzaContext.Provider value={contextValues}>
      {children}
    </PizzaContext.Provider>
  );
};
