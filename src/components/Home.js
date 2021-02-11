import React, { useState } from "react";

// [x] Auto Purchase Price (Currency)
// [x] Auto Make (Text)
// [x] Auto Model (Text)
// [x] User Estimated Yearly Income (Currency)
// [x] User Estimated Credit Score (Number from 300-850)

// [x] These fields are all required and should validate to type.
// [x] Provide feedback to the user when they wrong or missing.
// [] There should be space for marketing copy (Lorum Ipsem)
// and controls for moving forward.

const Home = () => {
  const [autoPrice, setAutoPrice] = useState(0);
  const [autoMake, setAutoMake] = useState("");
  const [autoModel, setAutoModel] = useState("");
  const [yearlyIncome, setYearlyIncome] = useState(0);
  const [creditScore, setCreditScore] = useState(300);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAutoPrice(0);
    setAutoMake("");
    setAutoModel("");
    setYearlyIncome(0);
    setCreditScore(350);
  };
  return (
    <div>
      <h1>Auto Loan</h1>
      <h3> Fill out this form to pre qualify for an auto loan </h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="autoPrice"> Auto Purchase Price: </label>
        <input
          type="number"
          min="1"
          id="autoPrice"
          name="autoPrice"
          value={autoPrice}
          placeholder="Auto Purchase Price"
          onChange={(e) => setAutoPrice(e.target.value)}
        />
        <label htmlFor="autoMake"> Auto Make: </label>

        <input
          type="text"
          id="autoMake"
          name="autoMake"
          value={autoMake}
          placeholder="Auto Make"
          onChange={(e) => setAutoMake(e.target.value)}
        />
        <label htmlFor="autoModel"> Auto Model: </label>

        <input
          type="text"
          id="autoModel"
          name="autoModel"
          value={autoModel}
          placeholder="Auto Model"
          onChange={(e) => setAutoModel(e.target.value)}
        />

        <label htmlFor="yearlyIncome"> Yearly Income: </label>

        <input
          type="integer"
          id="yearlyIncome"
          name="yearlyIncome"
          value={yearlyIncome}
          placeholder="Yearly Income"
          onChange={(e) => setYearlyIncome(e.target.value)}
        />
        <label htmlFor="creditScore"> Credit Score: </label>

        <input
          type="number"
          min="300"
          max="850"
          id="creditScore"
          name="creditScore"
          value={creditScore}
          placeholder="Credit Score"
          onChange={(e) => setCreditScore(e.target.value)}
        />

        <button type="submit" alt="submit">
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
