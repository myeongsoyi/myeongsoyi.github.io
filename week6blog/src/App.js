import { useState } from 'react';
import Button from './components/Button';
import './App.css';

function App() {

  return (
    <div>
      <header>
        <h1>고량주</h1>
      </header>
      <main>
        <aside className='sidebar'>
          <Button title="추가" onClick={showModal();} />
        </aside>
        <section className='container'>

        </section>
      </main>
    </div>
  );
}

export default App;
