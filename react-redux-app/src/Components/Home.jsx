import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Home = () => {
  const contacts = useSelector((state) => state);
  //console.log(contacts);
  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("student deleted successfully!!");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-5 text-right">
          <Link to="/add" className="btn btn-outline-dark">
            Add to cart
          </Link>
        </div>
        <div className="col-md-10 mt-2 mx-auto">
          <table className="table table-hover">
            <thead className="text-white bg-dark text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.from(contacts).map((contact, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.number}</td>
                  <td>
                    <Link
                      to={`/edit/${contact.id}`}
                      className="btn btn-sm btn-primary mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      onClick={() => deleteContact(contact.id)}
                      className="btn btn-sm btn-danger m-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
