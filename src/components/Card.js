import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img className="mosque" src={props.item.imageUrl} alt="Faisal Mosque" />
      <div className="location-icon">
        <i id="location-icon" class="fa-solid fa-location-dot"></i>
      </div>
      <p className="pakistan">{props.item.location}</p>
      <a
        className="google-link"
        href={props.item.googleMapsUrl}
        target="_blank"
      >
        View on Google Maps
      </a>
      <h1 className="locationheading">{props.item.title}</h1>
      <h6 className="date">
        {props.item.startDate} - {props.item.endDate}
      </h6>
      <p className="description">{props.item.description}</p>
      <hr />
    </div>
  );
}
