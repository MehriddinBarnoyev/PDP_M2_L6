import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import QoshishStyledWrapper from "./QoshishStyledWrapper";
import { Tab, Tabs } from "react-bootstrap";

const Qoshish = () => {
  const side1 = (
    <NavLink
      to={"kategoriya"}
      className={`fw-bold me-4 text-dark  text-center py-2  text-decoration-none w-100
    ${({ isActive }) => (isActive ? "active" : "")}`}
      style={{ width: 200 }}
    >
      Kategoriya qo'shish
    </NavLink>
  );
  const side2 = (
    <NavLink
      to={"taom"}
      className={`fw-bold me-4 text-dark  text-center py-2 rounded text-decoration-none 
        ${({ isActive }) => (isActive ? "active" : "")}`}
      style={{ width: 200 }}
    >
      Taom qo'shish
    </NavLink>
  );
  

  return (
    <QoshishStyledWrapper>
      <div className="wrapper ms-3 mt-3" style={{ width: 900 }}>
        <h2>Qo'shish</h2>
        <p>Yangi kategoriya / taom qo'shish</p>
        <div className="d-flex align-items-center">
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title={side1}></Tab>
            <Tab eventKey="home" title={side2}></Tab>
            
          </Tabs>
        </div>
        <Outlet />
      </div>
    </QoshishStyledWrapper>
  );
};

export default Qoshish;
