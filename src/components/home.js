import React from "react";
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./styles.css";

function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "2%" }}>
        <i>"One man's trash is another man's treasure"</i>
      </h1>
      <div className="carousel">
        <a className="carousel-item" href="#one!">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg" />
        </a>
        <a className="carousel-item" href="#two!">
          <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </a>
        <a className="carousel-item" href="#three!">
          <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80" />
        </a>
      </div>

      <h2 style={{ marginTop: "2%", textAlign: "center", marginBottom: "1%" }}>
        Our Mission
      </h2>
      <h5
        style={{
          fontWeight: "lighter",
          paddingLeft: "10%",
          paddingRight: "10%",
          paddingBottom: "50px",
          textAlign: "justify",
        }}
      >
        FoodHub is a responsive web application built with the MERN stack that
        allows users to donate excess food and reduce food waste.{" "}
        <b>
          Did you know that roughly one-third of the food produced in the world
          for human consumption every year (approximately 1.3 billion tonnes)
          gets lost or wasted?
        </b>{" "}
        That is perfectly good food that is thrown away due to imperfections in
        shape and colour. Yum aims to change this by allowing both individuals
        and establishments to donate their excess food.
        <br />
        <br />
      </h5>
    </div>
  );
}

export default Home;
