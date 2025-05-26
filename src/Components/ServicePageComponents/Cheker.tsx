import React, { useState } from "react";
import Words from "./Words.json";

const Cheker = () => {
  const [word, setWord] = useState<string>("");
  const [savedWords, setSavedWords] = useState<string[]>([]);
  const [isDisplay, setIsDisplay] = useState<boolean | null>(null);

  console.log(savedWords);

  const akneWords = Words.words;

  const submitBtn = () => {
    for (let i = 0; i < akneWords.length; i++) {
      if (
        akneWords[i].toLowerCase().replace(/[^a-zA-Z]/g, "") ===
        word
          .trim()
          .toLowerCase()
          .replace(/[^a-zA-Z]/g, "")
      ) {
        alert("akne");
        if (!savedWords.includes(word.trim())) {
          setSavedWords((prev) => [...prev, word.trim()]);
        }
        setIsDisplay(true);
        return;
      }
    }

    setIsDisplay(false);
    alert("not found");
  };

  const resetBtn = () => {
    setSavedWords([]);
  };

  return (
    <div className="bg-white p-5 flex flex-col justify-center items-center" style={{ backgroundColor: "rgb(255, 253, 245)" }}>
      <div className="p-15 flex flex-col justify-center items-center gap-5">
        <div>
          <h1 className="text-5xl text-center md:text-left">Acne Ingredient Checker</h1>
        </div>
        <div className="flex flex-col text-center gap-2">
          <h1 className="text-2xl">Your Ingredients</h1>
          <h1 className="text-xl">
            Add your ingredients below to see if any cause acne on your skin.
          </h1>
        </div>
        <div className="w-full">
          <textarea
            onChange={(e) => setWord(e.target.value)}
            name="cheker"
            id="cheker"
            className="w-full h-40 border hover:border-black transition-colors  duration-300 rounded-lg p-2"
          ></textarea>
        </div>

        <div className="w-full max-h-[150px] min-h-[150px]">
          {isDisplay === true ? (
            <div className="w-full flex flex-col gap-5 max-h-[150px] min-h-[150px] overflow-y-auto overflow-x-hidden">
              <h3 className="font-bold text-xl text-red-600">Oh no! Our AI Found acne-causing ingredient.</h3>
              <ol  className="list-decimal list-inside">
              {savedWords.map((word, index) => (
                <li key={index} className="font-bold">
                  {word}
                </li>
               
              ))}
               </ol>
            </div>
          ) : isDisplay === false ?(
            <p className="font-bold">This item is saved!</p>
          ) : null}
        </div>

        <div className="flex gap-2 justify-center md:justify-start w-full">
          <button
            style={{backgroundColor:"#d79a88"}}
            onClick={submitBtn}
            className="p-5 rounded-full border text-white"
          >
            SUBMIT
          </button>
          <button onClick={resetBtn} className="p-5 rounded-full border">
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cheker;
