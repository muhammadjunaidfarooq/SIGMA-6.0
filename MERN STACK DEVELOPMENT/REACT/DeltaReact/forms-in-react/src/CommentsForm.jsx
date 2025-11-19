import { useState } from "react";
import { useFormik } from "formik";

function validate(values) {
  let errors = {};
  if (!values.userName) {
    errors.userName = "UserName cannot be empty";
  }
  if (!values.remarks) {
    errors.remarks = "Remarks is required";
  }
  return errors;
}

export default function CommentsForm({ addNewComment }) {
  // let [formData, setFormData] = useState({
  //   userName: "",
  //   remarks: "",
  //   rating: 3,
  // });

  const formik = useFormik({
    initialValues: {
      userName: "",
      remarks: "",
      rating: 5,
    },
    validate,
    onSubmit: (values) => {
      addNewComment(values);
      alert(JSON.stringify(values, null, 2));
    },
  }); 

  // let handleInputChanege = (event) => {
  //   setFormData((currData) => {
  //     return {
  //       ...currData,
  //       [event.target.name]: event.target.value,
  //     };
  //   });
  // };

  // let handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(formData);
  //   addNewComment(formData);
  //   setFormData({
  //     userName: "",
  //     remarks: "",
  //     rating: 5,
  //   });
  // };

  return (
    <div>
      <h4>Give A comment!</h4>
      <form action="" onSubmit={formik.handleSubmit}>
        <label htmlFor="userName">Username</label> &nbsp;
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="Enter username"
          value={formik.values.userName}
          onChange={formik.handleChange}
        />
        {formik.errors.userName && formik.touched.userName ? (
          <p style={{ color: "red" }}>{formik.errors.userName}</p>
        ) : null}
        <br /> <br />
        <textarea
          name="remarks"
          id="remarks"
          value={formik.values.remarks}
          placeholder="Add few remarks..."
          onChange={formik.handleChange}
        ></textarea>
        {formik.errors.remarks && formik.touched.remarks ? (
          <p style={{ color: "red" }}>{formik.errors.remarks}</p>
        ) : null}
        <br />
        <label htmlFor="rating">Rating</label> &nbsp;
        <input
          type="number"
          name="rating"
          id="rating"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
        />
        <br /> <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
