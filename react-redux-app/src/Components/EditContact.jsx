import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const EditContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const { id } = useParams();

  const contacts = useSelector((state) => state);
  console.log(contacts);
  const Currentcontact = Array.from(contacts).find(
    (contact) => contact.id === parseInt(id)
  );
  console.log(Currentcontact);
  useEffect(() => {
    if (Currentcontact) {
      setName(Currentcontact.name);
      setEmail(Currentcontact.email);
      setNumber(Currentcontact.number);
    }
    // console.log("is there useEffect!!!");
  }, [Currentcontact]);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = Array.from(contacts).find(
      (contact) => contact.id !== parseInt(id) && contact.email === email
    );

    const checkNumber = Array.from(contacts).find(
      (contact) =>
        contact.id !== parseInt(id) && contact.number === parseInt(number)
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
      id: parseInt(id),
      name,
      number,
      email,
    };
    // console.log(Array.from(contacts).length);
    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("student updated successfully!!");
    history.push("/");
    //console.log(data);
  };

  return (
    <div className="container mt-5">
      {Currentcontact ? (
        <>
          <h1 className="display-3 my-3 text-center">Edit Student {id}</h1>
          <div className="row">
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
                <div className="form-group text-center pt-2">
                  <input
                    type="submit"
                    value="update student"
                    className=" btn   btn-success  "
                  />
                  <Link to="/" className=" btn mx-2   btn-danger  ">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="display-3 my-5 text-center">
          Studentcontact with id {id} not exists!!
        </h1>
      )}
    </div>
  );
};

export default EditContact;
