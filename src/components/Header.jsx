import { useState } from "react";
import Button from "./Button";

function Header() {
  const [count, setCount] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const handleCountChange = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <header className="h-45.5 flex justify-center items-center flex-col">
        <h1 className="text-3xl text-[#6E728E] font-bold">Our Pricing </h1>
        <div className="flex gap-26 text-[#6E728E] mt-10">
          <span>Annually</span>
          <span>Monthly</span>
          <button onClick={handleCountChange}>click me</button>
          <span>count is {count}</span>
        </div>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? "x" : "="}
        </button>
        {isOpen && <div>menu</div>}
      </header>

      <Button count={count}></Button>
    </>
  );
}

export default Header;
