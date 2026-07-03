import Header from "./components/Header";
import Card from "./components/Card";
import Menu from "./components/Menu"

function App() {
  const student = {
    age: 24,
    name: "gsdh",
  };

  return (
    <>
      <main className="bg-[#F7F7FE] h-screen">
        <Header></Header>
        <div className="flex ">
          <Card info={{ price: "19.99", storage: "500 GB" }}></Card>
          <Card info={{ price: "24.99", storage: "1 TB" }}></Card>
          <Card info={{ price: "39.99", storage: "2 TB" }}></Card>
        </div>
<Menu></Menu>
      </main>
    </>
  );
}

export default App;
