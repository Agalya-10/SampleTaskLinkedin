import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Component/Main'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
