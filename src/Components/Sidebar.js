import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const categories = [
  "Art & Photography",
  "Architecture",
  "Art forms",
  "Art treatments & subjects",
  "Dance & other performing arts",
  "Film, tv & radio",
  "History of art / art & design styles",
  "Industrial / commercial art & design",
  "Music",
  "Photography & photographs",
  "The arts: general issues",
  "Theatre studies",
];

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <h3>Browse Categories</h3>
      <ul className="category-list">
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => navigate(`/books/${encodeURIComponent(category)}`)}
            className="category-item"
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
