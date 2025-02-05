import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";


function App() {
  const [length, setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [pass, setPass] = useState("");
  // use ref hook..
  const passwordRef = useRef(null);

  const passgenerator = useCallback(() => {
    let pass = "";
    let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) string += "0123456789";
    if (characterAllowed) string += "!@#$%^&*()";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }
    setPass(pass);
  }, [length, numberAllowed, characterAllowed, setPass]);

  useEffect(() => {
    passgenerator();
  }, [length, numberAllowed, characterAllowed, passgenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(pass);
  }, [pass]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md bg-gray-800 rounded-lg px-4 py-3 my-8 text-orange-500">
        <h1 className="text-center text-white my-4">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hiddden mb-4 bg-white">
          <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readonly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-black px-3 py-0.5 shrink-0 copy-button"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLenght(e.target.value)}
            />
            <label className="text-orange">Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              value={numberAllowed}
              id="numberInput"
              onChange={(e) => setNumberAllowed((prev) => !prev)}
            />
            <label className="text-orange">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              value={characterAllowed}
              id="numberInput"
              onChange={(e) => setCharacterAllowed((prev) => !prev)}
            />
            <label className="text-orange">Special Char</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
