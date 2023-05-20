import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//         <App />,
//         rootElement
//     );


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
