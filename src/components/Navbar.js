import React from "react";
import "../styles/navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = ({ size, setShow }) => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Electronic Items
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i class="fa fa-shopping-cart">ADD TO CART</i>
          </span>
          <span>{size}</span>
        </div>
        <div>
          {isAuthenticated && <p>{user.name}</p>}
          {isAuthenticated ? (
            <div>
              <button
                className="btn"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log out
              </button>
            </div>
          ) : (
            <div>
              <button className="btn" onClick={() => loginWithRedirect()}>
                Log in
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
