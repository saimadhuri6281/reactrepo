// src/Components/Item.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import sports1Image from '../Assets/sports1.jpg';
import sports2Image from '../Assets/sports2.jpg';
import sports3Image from '../Assets/sports3.jpg';
import sports4Image from '../Assets/sports4.jpg';
import sports5Image from '../Assets/sports5.jpg';
import sports6Image from '../Assets/sports6.jpg';
import sports7Image from '../Assets/sports7.jpg';
import sports8Image from '../Assets/sports8.jpg';
import sports9Image from '../Assets/sports9.jpg';
import sports10Image from '../Assets/sports10.jpg';
import sports11Image from '../Assets/sports11.jpg';
import sports12Image from '../Assets/sports12.jpg';
import sports13Image from '../Assets/sports13.jpg';
import sports14Image from '../Assets/sports14.jpg';
import sports15Image from '../Assets/sports15.jpg';


const products = {
  sports1: {
    image: sports1Image,
    name: 'Football Classic',
    description: `A high-quality football designed for both practice and competitive play. Ideal for all ages, this ball offers great grip and control, making it a favorite among players.`,
    price: 2000,
    ratingsCount: {
      5: 300,
      4: 200,
      3: 50,
      2: 20,
      1: 5,
    },
    comments: [],
  },
  sports2: {
    image: sports2Image,
    name: 'Football Pro',
    description: `Engineered for the serious player, this football provides excellent durability and performance. Perfect for tournaments or intense training sessions.`,
    price: 1700,
    ratingsCount: {
      5: 280,
      4: 180,
      3: 60,
      2: 25,
      1: 10,
    },
    comments: [],
  },
  sports3: {
    image: sports3Image,
    name: 'Football Elite',
    description: `The ultimate football for professional players. Its advanced construction ensures superior touch and long-lasting performance.`,
    price: 2200,
    ratingsCount: {
      5: 310,
      4: 210,
      3: 70,
      2: 15,
      1: 5,
    },
    comments: [],
  },
  sports4: {
    image: sports4Image,
    name: 'Golf Ball Premium',
    description: `Designed for precision and control, this golf ball is perfect for both novice and expert golfers. Enhanced aerodynamics for optimal distance.`,
    price: 2200,
    ratingsCount: {
      5: 250,
      4: 150,
      3: 75,
      2: 30,
      1: 10,
    },
    comments: [],
  },
  sports5: {
    image: sports5Image,
    name: 'Golf Ball with Stick',
    description: `This set includes a premium golf ball and a durable stick, making it perfect for practicing your swings in the comfort of your home.`,
    price: 2900,
    ratingsCount: {
      5: 260,
      4: 160,
      3: 80,
      2: 20,
      1: 10,
    },
    comments: [],
  },
  sports6: {
    image: sports6Image,
    name: 'Tennis Ball',
    description: `Standard quality tennis balls suitable for practice and matches. Consistent bounce and durability make them a great choice.`,
    price: 2900,
    ratingsCount: {
      5: 240,
      4: 140,
      3: 70,
      2: 20,
      1: 10,
    },
    comments: [],
  },
  sports7: {
    image: sports7Image,
    name: 'Tennis Ball with Bat',
    description: `A fun combo set for beginners, including a tennis ball and a lightweight bat for casual play and practice.`,
    price: 1900,
    ratingsCount: {
      5: 230,
      4: 130,
      3: 60,
      2: 15,
      1: 5,
    },
    comments: [],
  },
  sports8: {
    image: sports8Image,
    name: 'Cricket Ball and Bat',
    description: `Everything you need to start playing cricket! This set includes a sturdy bat and a high-quality cricket ball.`,
    price: 2900,
    ratingsCount: {
      5: 300,
      4: 200,
      3: 80,
      2: 20,
      1: 5,
    },
    comments: [],
  },
  sports9: {
    image: sports9Image,
    name: 'Shuttle Bats (2 Pack)',
    description: `Perfect for badminton enthusiasts, this set includes two high-quality shuttle bats for optimal play.`,
    price: 2900,
    ratingsCount: {
      5: 150,
      4: 100,
      3: 40,
      2: 10,
      1: 5,
    },
    comments: [],
  },
  sports10: {
    image: sports10Image,
    name: 'Lightweight Football',
    description: `This lightweight football is great for young players or beginners looking to improve their skills.`,
    price: 3900,
    ratingsCount: {
      5: 170,
      4: 130,
      3: 50,
      2: 15,
      1: 5,
    },
    comments: [],
  },
  sports11: {
    image: sports11Image,
    name: 'Cricket Bat and Pads Combo',
    description: `This combo includes a professional-grade cricket bat and matching pads, providing excellent protection and performance.`,
    price: 2500,
    ratingsCount: {
      5: 180,
      4: 140,
      3: 50,
      2: 20,
      1: 5,
    },
    comments: [],
  },
  sports12: {
    image: sports12Image,
    name: 'Cricket Helmet',
    description: `Essential safety gear for any cricketer, this helmet provides excellent protection without sacrificing comfort.`,
    price: 2400,
    ratingsCount: {
      5: 200,
      4: 100,
      3: 30,
      2: 10,
      1: 5,
    },
    comments: [],
  },
  sports13: {
    image: sports13Image,
    name: 'Cricket Hand Gloves',
    description: `High-quality gloves designed for cricketers to ensure a firm grip and comfort while playing.`,
    price: 2900,
    ratingsCount: {
      5: 160,
      4: 120,
      3: 50,
      2: 10,
      1: 5,
    },
    comments: [],
  },
  sports14: {
    image: sports14Image,
    name: '3 Cricket Bats Combo',
    description: `A set of three cricket bats, perfect for families or clubs looking to provide players with different options.`,
    price: 1800,
    ratingsCount: {
      5: 170,
      4: 140,
      3: 40,
      2: 15,
      1: 5,
    },
    comments: [],
  },
  sports15: {
    image: sports15Image,
    name: 'Cricket Leg Pads',
    description: `Durable and lightweight leg pads designed to provide maximum protection for cricketers during play.`,
    price: 2900,
    ratingsCount: {
      5: 180,
      4: 110,
      3: 60,
      2: 10,
      1: 5,
    },
    comments: [],
  },
};


const Item1= () => {
  const { id } = useParams();
  const product = products[id];

  const [cartCount, setCartCount] = useState(0);
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

  // Return null if the product doesn't exist
  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const handleRemoveFromCart = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    console.log(comment);
    setComment(''); // Clear comment input after submission
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div style={styles.container}>
      <div style={styles.cart}>
        <span style={styles.cartIcon}>🛒</span>
        <span style={styles.cartCount}>{cartCount}</span>
      </div>
      <img src={product.image} alt={product.name} style={styles.image} />
      <div style={styles.content}>
        <h2 style={styles.detailsHeading}>{product.name}</h2>
        <p>{product.description}</p>
        <div style={styles.price}>Price: ₹{product.price}</div>

        <div style={styles.cartControls}>
          <button style={styles.button} onClick={handleRemoveFromCart}>-</button>
          <span style={styles.countDisplay}>{cartCount}</span>
          <button style={styles.button} onClick={handleAddToCart}>+</button>
        </div>

        <button style={styles.addToCartButton} onClick={handleAddToCart}>Add to Cart</button>

        <div style={styles.ratings}>
          <h3>Ratings</h3>
          {Object.entries(product.ratingsCount).reverse().map(([stars, count]) => (
            <div key={stars} style={styles.ratingBar}>
              <span>
                {stars} <span style={styles.yellowStar}>{String.fromCharCode(9733).repeat(stars)}</span>
              </span>
              <div style={styles.barContainer}>
                <div style={{
                  ...styles.bar,
                  width: `${(count / 250) * 100}%`,
                }} />
              </div>
              <span style={styles.count}>{count}</span>
            </div>
          ))}
        </div>

        <div style={styles.commentsSection}>
          <h3>Comments</h3>
          <form onSubmit={handleCommentSubmit}>
            <textarea
              style={styles.commentInput}
              placeholder="Leave a comment..."
              value={comment}
              onChange={handleCommentChange}
            />
            <button type="submit" style={styles.commentButton}>Submit</button>
          </form>
        </div>

        <button style={styles.goBackButton} onClick={handleGoBack}>Go Back</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  cart: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#343a40',
    padding: '10px',
    borderRadius: '5px',
  },
  cartIcon: {
    fontSize: '24px',
    color: 'white',
  },
  cartCount: {
    marginLeft: '5px',
    fontSize: '18px',
    color: 'white',
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    marginBottom: '20px',
  },
  content: {
    textAlign: 'left',
    margin: '0 auto',
    maxWidth: '600px',
  },
  detailsHeading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  price: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '20px 0',
    textAlign: 'center',
  },
  cartControls: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0',
  },
  countDisplay: {
    margin: '0 10px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  addToCartButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  ratings: {
    marginTop: '20px',
  },
  ratingBar: {
    display: 'flex',
    alignItems: 'center',
    margin: '5px 0',
  },
  barContainer: {
    flexGrow: 1,
    backgroundColor: '#e0e0e0',
    borderRadius: '10px',
    overflow: 'hidden',
    marginLeft: '10px',
    height: '10px',
  },
  bar: {
    height: '100%',
    backgroundColor: '#28a745',
    borderRadius: '10px',
  },
  count: {
    marginLeft: '10px',
  },
  button: {
    padding: '10px 15px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  commentsSection: {
    marginTop: '20px',
  },
  commentInput: {
    width: '100%',
    height: '60px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '10px',
    fontSize: '14px',
  },
  commentButton: {
    padding: '10px 20px',
    fontSize: '14px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  yellowStar: {
    color: '#FFD700',
    fontSize: '20px',
  },
  goBackButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#f0f0f0',
    color: '#333',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Item1;

