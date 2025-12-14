import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Breadcrumb.css';

export const Breadcrumb = ({ items = [] }) => {
  if (items.length === 0) return null;

  return (
    <div className="breadcrumb">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="breadcrumb-separator"> / </span>}
          {item.to ? (
            <Link to={item.to} className="breadcrumb-link">
              {item.label}
            </Link>
          ) : (
            <span className="breadcrumb-current">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

