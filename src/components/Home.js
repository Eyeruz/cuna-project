import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

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
  //   const [autoPrice, setAutoPrice] = useState(0);
  //   const [autoMake, setAutoMake] = useState("");
  //   const [autoModel, setAutoModel] = useState("");
  //   const [yearlyIncome, setYearlyIncome] = useState(0);
  //   const [creditScore, setCreditScore] = useState(300);
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setAutoPrice(0);
  //     setAutoMake("");
  //     setAutoModel("");
  //     setYearlyIncome(0);
  //     setCreditScore(350);
  //   };

  return (
    <Formik
      initialValues={{
        autoPrice: "",
        autoMake: "",
        autoModel: "",
        yearlyIncome: "",
        creditScore: "",
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          console.log("Loading...", values);
          setSubmitting(false);
          resetForm();
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        autoPrice: Yup.string().required("No Price Provided"),
        autoMake: Yup.string().required("No Make Provided"),
        autoModel: Yup.string().required("No Model provided"),
        yearlyIncome: Yup.string().required("No Yearly Income Provided"),
        creditScore: Yup.string()
          .required("No Credit Score provided.")
          .matches(
            /(?=.*[350-850])/,
            "credit score must be with in a 350 - 850 range"
          ),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleSubmit,
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <h1>Auto Loan</h1>

            <h3> Fill out this form to pre qualify for an auto loan </h3>
            <label htmlFor="autoPrice"> Auto Purchase Price: </label>
            <input
              type="number"
              min="1"
              id="autoPrice"
              name="autoPrice"
              value={values.autoPrice}
              placeholder="Auto Purchase Price"
              onChange={handleChange}
              className={errors.autoPrice && touched.autoPrice && "error"}
            />
            {errors.autoPrice && touched.autoPrice && (
              <div className="input-error">{errors.autoPrice}</div>
            )}

            <label htmlFor="autoMake"> Auto Make: </label>

            <input
              type="text"
              id="autoMake"
              name="autoMake"
              value={values.autoMake}
              placeholder="Auto Make"
              onChange={handleChange}
              className={errors.autoMake && touched.autoMake && "error"}
            />
            {errors.autoMake && touched.autoMake && (
              <div className="input-error">{errors.autoMake}</div>
            )}
            <label htmlFor="autoModel"> Auto Model: </label>

            <input
              type="text"
              id="autoModel"
              name="autoModel"
              value={values.autoModel}
              placeholder="Auto Model"
              onChange={handleChange}
              className={errors.autoModel && touched.autoModel && "error"}
            />
            {errors.autoModel && touched.autoModel && (
              <div className="input-error">{errors.autoModel}</div>
            )}

            <label htmlFor="yearlyIncome"> Yearly Income: </label>

            <input
              type="integer"
              id="yearlyIncome"
              name="yearlyIncome"
              value={values.yearlyIncome}
              placeholder="Yearly Income"
              onChange={handleChange}
              className={errors.yearlyIncome && touched.yearlyIncome && "error"}
            />
            {errors.yearlyIncome && touched.yearlyIncome && (
              <div className="input-error">{errors.yearlyIncome}</div>
            )}
            <label htmlFor="creditScore"> Credit Score: </label>

            <input
              type="number"
              min="300"
              max="850"
              id="creditScore"
              name="creditScore"
              value={values.creditScore}
              placeholder="Credit Score"
              onChange={handleChange}
              className={errors.creditScore && touched.creditScore && "error"}
            />
            {errors.creditScore && touched.creditScore && (
              <div className="input-error">{errors.creditScore}</div>
            )}
            <> </>

            <button type="submit" alt="submit">
              {" "}
              Submit
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default Home;
