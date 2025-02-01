import React from 'react';
import styled from 'styled-components';
import { Star } from 'lucide-react'; // Import an icon for the review (you can customize this)

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <span />
        <div className="content">
          <div className="testimonial">
            <div className="profile">
              <div className="avatar">
                <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="User" /> {/* Placeholder Image */}
              </div>
              <div className="name">Amit Sharma</div>
            </div>
            <div className="review">
              <Star className="star-icon" />
              <p>"This platform helped me understand DSA concepts easily!"</p>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 250px;
    height: 320px;
    color: #fff;
    transition: 0.5s;
    cursor: pointer;
    border-radius: 1.2em;
    border: 2px solid #1e40af; /* Blue border */
    overflow: hidden;
  }

  .card:hover {
    transform: translateY(-20px);
  }

  .card::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(45deg, #003366, #1e40af); /* Dark and light blue gradient */
    border-radius: 1.2em;
    z-index: 1;
  }

  .card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #003366, #1e40af);
    filter: blur(30px);
  }

  .card span {
    position: absolute;
    top: 6px;
    left: 6px;
    right: 6px;
    bottom: 6px;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 2;
    border-radius: 1em;
  }

  .card span::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
  }

  .card .content {
    position: relative;
    padding: 20px;
    z-index: 10;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 800;
    font-size: 1.2em;
    text-align: center;
  }

  .testimonial {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }

  .profile {
    display: flex;
    align-items: center;
    margin-bottom: 20px; /* Increased spacing */
  }

  .avatar {
    border-radius: 50%;
    overflow: hidden;
    width: 50px; /* Increased avatar size */
    height: 50px;
    margin-right: 15px; /* Increased space between image and name */
  }

  .avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .name {
    font-size: 1.2em; /* Increased font size for name */
    font-weight: 600;
    color: #fff; /* White text for contrast */
  }

  .review {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1em;
    margin-top: 10px; /* Added margin to separate review */
  }

  .star-icon {
    color: #ffbc00;
    margin-bottom: 8px; /* Spacing between icon and review text */
  }

  .review p {
    font-style: italic;
    color: #e0e0e0; /* Light gray text for review */
    text-align: center;
    max-width: 200px;
  }
`;

export default Card;
