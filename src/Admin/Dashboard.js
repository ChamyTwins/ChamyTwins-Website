import React from "react";
import { LogOut, reset } from "../features/authSlice.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import LogoBisnis from "../assets/images/Chamytwinslogo.png";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    confirmAlert({
      title: "Konfirmasi",
      message: "Apakah Anda yakin ingin keluar ?",
      buttons: [
        {
          label: "Ya",
          onClick: () => {
            dispatch(LogOut());
            dispatch(reset());
            navigate("/loginadmin");
          },
        },
        {
          label: "Tidak",
          onClick: () => {
            navigate("/dashboardAdmin");
          },
        },
      ],
    });
  };

  return (
    <div>
      <div className="navbar-con position-relative bg-dark">
        <div className="img1-con-dash position-relative overflow-hidden">
          <img
            className="logobisnis object-fit-contain"
            alt="chamytwinslogo"
            src={LogoBisnis}
          />
        </div>
        <button
          type="submit"
          className="custom-button-dash position-absolute end-0 top-50 translate-middle-y"
          onClick={logout}
        >
          Logout
        </button>
      </div>
      <p className="title-dash text-center">Customer Data</p>
      <table
        class="table custom-table-dash table-striped position-relative start-50 top-0 translate-middle-x"
        style={{ width: "85%" }}
      >
        <thead className="text-center">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
