import './App.css';

function App() {
  return (
    <div className="App">
      <figure>
        <img width={200} height={200} src="/bun-logo.svg" alt="bun-logo" />
      </figure>
      <p>Whoa! finally you adopt me as your runtime javascript.. </p>
      <a href="https://bun.sh/">read more about documentation</a>
      <br />
      <a href="https://bun.sh/guides/ecosystem/vite">
        generating frontend tooling with vite
      </a>
    </div>
  );
}

export default App;
