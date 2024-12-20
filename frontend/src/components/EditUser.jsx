import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Female");

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("http://localhost:5080/users/" + id);
        setName(res.data.name);
        setEmail(res.data.email);
        setGender(res.data.gender);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  const updateUser = async (e)=>{
    e.preventDefault();

    try{
        await axios.patch(`http://localhost:5080/users/${id}` ,{
            name,
            email,
            gender
        })
        navigate("/")
    }catch(error){
        console.log(error)
    }
  }

  return (
    <div className="columns">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">نام</label>
            <div className="control">
              <input
                type="text"
                name="name"
                className="input"
                placeholder="نام"
                value={name}
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
                value={email}
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
                  value={gender}
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

export default EditUser;
