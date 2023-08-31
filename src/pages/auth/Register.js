import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import authStyle from "./style/authStyle";
import "../../style/authStyle.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  //   form func
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
      });
      if (res && res.data.success) {
        // toast.success(res.data.message);
        alert("Registered Successfully");
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something Went Wrong");
    }
  };

  return (
    <Layout title={"Register Now"}>
      <div className="form-container">
        <h1>REGISTER NOW</h1>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Name"
              required
            />
          </div>

          <div class="mb-3">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              class="form-control"
              id="exampleInputEmail"
              placeholder="Enter Email"
              required
            />
          </div>

          <div class="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              class="form-control"
              id="exampleInputPassword"
              placeholder="Enter Password"
              required
            />
          </div>

          <div class="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              class="form-control"
              id="exampleInputPhone"
              placeholder="Enter Phone"
              required
            />
          </div>

          <div class="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              class="form-control"
              id="exampleInputAddress"
              placeholder="Enter Address"
              required
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
