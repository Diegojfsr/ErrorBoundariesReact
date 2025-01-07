import React from 'react';

const BuggyComponent = () => {
  throw new Error("Erro intencional!");
  return <div>Este componente tem um erro.</div>;
};

const App = () => {
  return (
    <div>
      <h1>Meu App</h1>
      <BuggyComponent />
    </div>
  );
};

export default App;
