import React from "react";
import "./About.css";

const tickets = [
  {
    type: "Early Bird",
    price: "₩30,000",
    desc: "Limited early bird tickets for the fastest attendees.",
  },
  {
    type: "Regular",
    price: "₩50,000",
    desc: "Standard conference ticket with full access.",
  },
  {
    type: "Student",
    price: "₩20,000",
    desc: "Discounted ticket for students with valid ID.",
  },
];

const Tickets = () => {
  return (
    <div className="tickets-page">

      <h1 className="tickets-title">🎟 PyCon Busan 2026 Tickets</h1>

      <p className="tickets-description">
        Join developers, engineers, and Python enthusiasts at PyCon Busan 2026.
      </p>

      <div className="tickets-grid">
        {tickets.map((ticket, index) => (
          <div key={index} className="ticket-card">

            <h2>{ticket.type}</h2>

            <p className="ticket-price">{ticket.price}</p>

            <p className="ticket-desc">{ticket.desc}</p>

            <button className="ticket-btn">
              Buy Ticket
            </button>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Tickets;