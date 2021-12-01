import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarTop = ({ handleSearchClick, handleClearQry, categories }) => {
  let subMenu = [];
  categories.map((element) => subMenu.push(element.name));

  return (
    <ReactBootStrap.Navbar bg="light" expand="lg" sticky="top">
      <ReactBootStrap.Container fluid>
        <ReactBootStrap.Navbar.Brand href="/" onClick={handleClearQry}>
          AVC Food Blog
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="navbarScroll" />
        <ReactBootStrap.Navbar.Collapse id="navbarScroll">
          <ReactBootStrap.Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <ReactBootStrap.NavLink
              to="/"
              href="/"
              onClick={handleClearQry}
              style={{
                listStyle: "none",
                textDecoration: "none",
                marginLeft: "50px",
                marginRight: "20px",
                color: "inherit",
              }}
            >
              <li>HOME</li>
            </ReactBootStrap.NavLink>
            <ReactBootStrap.NavLink
              to="/"
              href="/Login"
              onClick={handleClearQry}
              style={{
                listStyle: "none",
                textDecoration: "none",
                marginLeft: "40px",
                marginRight: "20px",
                color: "inherit",
              }}
            >
              <li>Login</li>
            </ReactBootStrap.NavLink>

            <ReactBootStrap.NavDropdown style={{marginLeft: "50px"}}
              title="Sections"
              id="navbarScrollingDropdown"
            >
              {/* {for (let index = 0; index < subMenu.length; index++) {
                <NavLink to={subMenu(index)} onClick={handleClearQry}>{subMenu(index)}</NavLink>
              }} */}

              <NavLink to="/B" onClick={handleClearQry}>
                <li>Breakfast</li>
              </NavLink>
              <NavLink to="/L" onClick={handleClearQry}>
                <li>Lunch</li>
              </NavLink>
              <NavLink to="/D" onClick={handleClearQry}>
                <li>Dinner</li>
              </NavLink>
              <NavLink to="/S" onClick={handleClearQry}>
                <li>Dessert</li>
              </NavLink>
            </ReactBootStrap.NavDropdown>
            <ReactBootStrap.Nav.Link style={{marginLeft: "35px"}} href="/" onClick={handleClearQry}>
              Contact Us
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link style={{marginLeft: "50px"}}href="/create" onClick={handleClearQry}>
              create recipe
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Form className="d-flex">
            <ReactBootStrap.FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <ReactBootStrap.Button
              variant="outline-dark"
              onClick={(e) => handleSearchClick(e)}
            >
              {""}
              Search
            </ReactBootStrap.Button>
          </ReactBootStrap.Form>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Container>
    </ReactBootStrap.Navbar>
  );
};


export default NavbarTop;
