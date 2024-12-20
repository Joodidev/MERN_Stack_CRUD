import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    handleUser();
  }, []);

  const handleUser = async () => {
    await axios
      .get("http://127.0.0.1:5080/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5080/users/${id}`);
      handleUser();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns">
      <div className="column is-half">
        <Link to="/add" className="button is-success">
          افزودن کاربر
        </Link>
        <table className="table is-striped is-fullwidth mt-5">
          <thead>
            <tr>
              <th>ID</th>
              <th>نام</th>
              <th>ایمیل</th>
              <th>جنسیت</th>
              <th>وضعیت</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender === "Female" ? "زن" : "مرد"}</td>
                  <td>
                    <Link
                      to={`edit/${user._id}`}
                      className="button is-info is-small ml-2"
                    >
                      ویرایش
                    </Link>
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="button is-danger is-small"
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
