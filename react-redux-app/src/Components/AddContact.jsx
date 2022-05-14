import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const AddContact = () => {
  //console.log(contacts);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  //console.log(history);
  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = Array.from(contacts).find(
      (contact) => contact.email === email && contact
    );

    const checkNumber = Array.from(contacts).find(
      (contact) => contact.number === parseInt(number)
    );

    if (!email || !number || !name) {
      return toast.warning("Please fill all fields!");
    }
    if (checkEmail) {
      return toast.error("This email already exist!");
    }
    if (checkNumber) {
      return toast.error("This number already exist!");
    }

    const data = {
      id: contacts[Array.from(contacts).length - 1].id + 1,
      name,
      number,
      email,
    };
    console.log(Array.from(contacts).length);
    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("student added successfully!!");
    history.push("/");
    console.log(data);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <h1 className="display-3 text-center">Add Student</h1>
        <div className="col-md-6 shadow mx-auto p-5 mt-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group pt-1">
              <input
                type="email"
                placeholder="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group pt-1">
              <input
                type="number"
                placeholder="Phone number"
                className="form-control"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="form-group pt-1">
              <input
                type="submit"
                value="Add student"
                className="form-control btn btn-block btn-lg btn-success  "
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
