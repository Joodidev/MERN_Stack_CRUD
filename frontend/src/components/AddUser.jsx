import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Female");

  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5080/users", {
        name,
        email,
        gender,
      });
      navigate("/")
    } catch (error) {}
  };

  return (
    <div className="columns">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">نام</label>
            <div className="control">
              <input
                type="text"
                name="name"
                className="input"
                placeholder="نام"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">ایمیل</label>
            <div className="control">
              <input
                type="text"
                name="email"
                className="input"
                placeholder="ایمیل"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">جنسیت</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  name="gender"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Female">زن</option>
                  <option value="Male">مرد</option>
                </select>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                ذخیره
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
