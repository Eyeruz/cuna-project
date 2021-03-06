import React, { useState, useEffect, useRef } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { qualifiedCheck } from "../actions/loanActions";
import { userInfo } from "../actions/userActions";
import { useHistory } from "react-router-dom";

const Home = ({ qualifiedCheck, userInfo }) => {
  const history = useHistory();

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
          qualifiedCheck(setSubmitting);
          userInfo(values);

          setSubmitting(false);
          resetForm();
          values.autoPrice >= 1000000
            ? history.push("/error")
            : history.push("/checking");
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
          <div className="formWrapper">
            <form className="firstform" onSubmit={handleSubmit}>
              <h1 className="formHeader">Auto Loan</h1>

              <h3> Fill out this form to pre qualify for an auto loan </h3>
              <div className="formFeildWrapper">
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
              </div>
              <div className="formFeildWrapper">
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
              </div>
              <div className="formFeildWrapper">
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
              </div>
              <div className="formFeildWrapper">
                <label htmlFor="yearlyIncome"> Yearly Income: </label>

                <input
                  type="integer"
                  id="yearlyIncome"
                  name="yearlyIncome"
                  value={values.yearlyIncome}
                  placeholder="Yearly Income"
                  onChange={handleChange}
                  className={
                    errors.yearlyIncome && touched.yearlyIncome && "error"
                  }
                />
                {errors.yearlyIncome && touched.yearlyIncome && (
                  <div className="input-error">{errors.yearlyIncome}</div>
                )}
              </div>
              <div className="formFeildWrapper">
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
                  className={
                    errors.creditScore && touched.creditScore && "error"
                  }
                />
                {errors.creditScore && touched.creditScore && (
                  <div className="input-error">{errors.creditScore}</div>
                )}
              </div>

              <> </>

              <button type="submit" alt="submit">
                {" "}
                Submit
              </button>
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default connect(null, { qualifiedCheck, userInfo })(Home);
