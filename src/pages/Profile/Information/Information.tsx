import React from "react";
import { NavLink, useParams } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import { useAppSelector } from "../../../hooks/hooks";
import { userApi } from "../../../store/reducers/servise/userServise";
import "./Information.scss";

const Information = () => {
  const { id } = useParams();
  const { role } = useAppSelector((state) => state.user.currentUser);
  const { error, data } = userApi.useGetUserQuery(role);
  console.log(data);

  return (
    <div>
      <Navbar />
      <div className="profile">
        <div className="left-profile">

          <div className="text">
            <hr />
            <h2>Информация</h2>
          </div>

        </div>

        <div className="right-profile">
          <div className="userImage">
            <img src={data?.image} alt="avatar" />
          </div>
          <p>{data?.name}</p>
          <div className="booking-links">
            <NavLink className="button" to={`/profile/${data?._id}`}>Заказы</NavLink>
            <NavLink className="button" to={`/menu/${data?._id}`}>Меню</NavLink>
            <NavLink className="button" to={`/information/${data?._id}`}>Информация о ресторане</NavLink>
          </div>
        </div>
      </div>
        
    </div>
  );
};

export default Information;