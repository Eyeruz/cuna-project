import React, { Fragment, useState, useEffect } from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { qualifiedCheck } from "../actions/userActions";
import * as EmailValidator from "email-validator";
import { bindActionCreators } from "redux";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

const NewAccout = ({ qualifiedCheck }) => {
  const history = useHistory();
  return (
    <Formik
      initialValues={{ email: "", password: "", passwordconfrimation: "" }}
      onSubmit={(values, { setSubmitting, resetForm, setFieldError }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          qualifiedCheck(values, history, setFieldError, setSubmitting);
          resetForm();
        }, 400);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required("No Email Provided"),
        password: Yup.string()
          .required("No Password Provided.")
          .min(9, "Password is too short - should have 9 chars minimum.")
          .matches(
            /(?=.*[@$!%*#?&, 0-9])/,
            "Password must contain a number or a special character."
          ),
        passwordconfrimation: Yup.string()
          .required("No Password Provided.")
          .test("passwords-match", "Passwords must match", function (value) {
            return this.parent.password === value;
          }),
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
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              className={errors.email && touched.email && "error"}
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}
            <label htmlFor="email">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              className={errors.password && touched.password && "error"}
            />
            {errors.password && touched.password && (
              <div className="input-feedback">{errors.password}</div>
            )}
            <label htmlFor="email">Password</label>
            <input
              name="passwordconfrimation"
              type="password"
              placeholder="Re-Enter your password"
              value={values.passwordconfrimation}
              onChange={handleChange}
              className={
                errors.passwordconfrimation &&
                touched.passwordconfrimation &&
                "error"
              }
            />
            {errors.passwordconfrimation && touched.passwordconfrimation && (
              <div className="input-feedback">
                {errors.passwordconfrimation}
              </div>
            )}
            <> </>
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default connect(null, { qualifiedCheck })(NewAccout);
