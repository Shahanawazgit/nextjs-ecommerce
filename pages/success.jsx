import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useStateContext } from "../context/StateContext";
import { BsBagCheckFill } from "react-icons/bs";
import { runFireworks } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any query, please email at
          <a href="mailto:shahanawaz2299@gmail.com" target="_blank" rel="noopener noreferrer" className="email">
            shahanawaz2299@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
