import React, { useState, useEffect } from "react";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import { collection, orderBy, getDocs, query } from "@firebase/firestore";
import { db } from "./firebase";
import Order from "./Order";
import { Link } from "react-router-dom";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  //const usersCollectionref = collection(db, "users", user?.uid, "orders");
  useEffect(() => {
    const getUsers = async () => {
      const datas = await getDocs(collection(db, "users", user?.uid, "orders"));
      query(orderBy("created", "desc"));
      if (user) {
        setOrders(
          datas.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      } else {
        setOrders([]);
      }
    };
    getUsers();
  }, [user]);
  return (
    <div className="orders">
      <Link to="/" className="order-link">
        <h2>Your Oders</h2>
      </Link>
      <div className="order_order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
