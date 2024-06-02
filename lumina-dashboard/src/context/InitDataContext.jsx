import { createContext, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const InitDataContext = createContext();

function InitDataProvider({ children }) {
  const [data, setData] = useState({ products: null, users: null });

  useEffect(() => {
    (async function () {
      try {
        const products = await axios.get("http://localhost:3000/api/products/list");
        const users = await axios.get("http://localhost:3000/api/users/list");
        const sales = await axios.get("http://localhost:3000/api/orders/list");
        setData({ products: products, users: users, sales: sales });
      } catch (error) {
        throw new Error(error);
      }
    })();
  }, []);

  return (
    <InitDataContext.Provider value={data}>{children}</InitDataContext.Provider>
  );
}

InitDataProvider.propTypes = {
  children: PropTypes.element,
};

export { InitDataContext, InitDataProvider };
