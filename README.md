# ErrorBoundariesReact
Projeto de Error Boundaries usando react, typescript e vite.

### Passo a passo para rodar esse projeto localmente.
1. Instalar o Vite: Primeiro, você precisa instalar o Vite. Abra o terminal e execute o seguinte comando:  
``` npm create vite@latest my-error-boundary-app --template react-ts ``` Isso criará um novo projeto Vite com React e TypeScript.

2. Instalar dependências: Navegue até o diretório do projeto e instale as dependências:  
```
cd my-error-boundary-app
npm install
```
3. Criar o Error Boundary: Crie um novo arquivo chamado ErrorBoundary.tsx na pasta src e adicione o seguinte código:  
```
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    console.error("Error captured:", error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Algo deu errado.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

```
4. Usar o Error Boundary: Envolva seus componentes com o ErrorBoundary no arquivo src/main.tsx:  
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundary from './ErrorBoundary';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
```
5. Adicionar um componente que pode lançar um erro: No arquivo src/App.tsx, adicione um componente que pode lançar um erro para testar o Error Boundary:  
```
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
```

6. Executar o projeto: Finalmente, execute o projeto para ver o Error Boundary em ação:  
``` npm run dev ```

Isso deve iniciar o servidor de desenvolvimento e abrir seu navegador. Você verá a mensagem "Algo deu errado." quando o BuggyComponent lançar um erro.  
Após executar o código acima, você verá a mensagem "Algo deu errado." na tela. Isso acontece porque o BuggyComponent lança um erro intencionalmente, e o ErrorBoundary captura esse erro e exibe a mensagem de fallback.
