import React, { useState } from "react";

const ProductList = React.lazy(() => import("./ProductList"));

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`dashboard-container ${darkMode ? "dark" : "light"}`}>
        <ProductList />
    </div>
  );
};

export default Dashboard;
