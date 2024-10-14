// src/Components/Item.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jersy1Image from '../Assets/jersy1.jpg';
import jersy2Image from '../Assets/jersy2.jpg';
import jersy3Image from '../Assets/jersy3.jpg';
import jersy4Image from '../Assets/jersy4.jpg';
import jersy5Image from '../Assets/jersy5.jpg';
import jersy6Image from '../Assets/jersy6.jpg';
import jersy7Image from '../Assets/jersy7.jpg';
import jersy8Image from '../Assets/jersy8.jpg';
import jersy9Image from '../Assets/jersy9.jpg';
import jersy10Image from '../Assets/jersy10.jpg';
import jersy11Image from '../Assets/jersy11.jpg';
import jersy12Image from '../Assets/jersy12.jpg';
import jersy13Image from '../Assets/jersy13.jpg';
import jersy14Image from '../Assets/jersy14.jpg';
import jersy15Image from '../Assets/jersy15.jpg';

const products = {
    jersy1: {
      image: jersy1Image,
      name: 'Virat Kohli Jersey',
      description: 'Official jersey worn by Virat Kohli, featuring breathable fabric and moisture-wicking technology.',
      price: 2000,
      ratingsCount: {
        5: 300,
        4: 200,
        3: 100,
        2: 40,
        1: 20,
      },
      features: ['Breathable fabric', 'Moisture-wicking', 'Durable stitching'],
      availableSizes: ['S', 'M', 'L', 'XL'],
    },
    jersy2: {
      image: jersy2Image,
      name: 'Surya Jersey',
      description: 'Stylish jersey inspired by Surya Kumar Yadav, perfect for cricket enthusiasts.',
      price: 1700,
      ratingsCount: {
        5: 250,
        4: 180,
        3: 90,
        2: 35,
        1: 15,
      },
      features: ['Comfort fit', 'High-quality material', 'Easy to wash'],
      availableSizes: ['M', 'L', 'XL'],
    },
    jersy3: {
      image: jersy3Image,
      name: 'Rohit Jersey',
      description: 'Celebrate Rohit Sharma with this comfortable and stylish jersey.',
      price: 2200,
      ratingsCount: {
        5: 280,
        4: 160,
        3: 70,
        2: 25,
        1: 10,
      },
      features: ['Lightweight', 'Soft fabric', 'Perfect for play'],
      availableSizes: ['S', 'M', 'L'],
    },
    jersy4: {
      image: jersy4Image,
      name: 'Dhoni Jersey',
      description: 'Show your support for MS Dhoni with this classic jersey.',
      price: 2400,
      ratingsCount: {
        5: 320,
        4: 190,
        3: 80,
        2: 20,
        1: 5,
      },
      features: ['Classic design', 'Comfortable fit', 'Stylish look'],
      availableSizes: ['M', 'L', 'XL'],
    },
    jersy5: {
      image: jersy5Image,
      name: 'Classic India Jersey',
      description: 'A timeless design that represents the spirit of Indian cricket.',
      price: 2300,
      ratingsCount: {
        5: 300,
        4: 170,
        3: 60,
        2: 30,
        1: 10,
      },
      features: ['Traditional colors', 'Comfortable material', 'Great for fans'],
      availableSizes: ['S', 'M', 'L', 'XL'],
    },
    jersy6: {
      image: jersy6Image,
      name: 'India Jersey',
      description: 'Proudly wear the colors of the Indian cricket team with this jersey.',
      price: 1800,
      ratingsCount: {
        5: 290,
        4: 160,
        3: 75,
        2: 20,
        1: 8,
      },
      features: ['Moisture-wicking', 'Durable fabric', 'Designed for comfort'],
      availableSizes: ['S', 'M', 'L', 'XL'],
    },
    jersy7: {
      image: jersy7Image,
      name: 'India Jersey',
      description: 'Classic design that symbolizes Indian pride on the cricket field.',
      price: 1600,
      ratingsCount: {
        5: 270,
        4: 150,
        3: 70,
        2: 25,
        1: 12,
      },
      features: ['Soft fabric', 'Easy to care for', 'Breathable'],
      availableSizes: ['M', 'L', 'XL'],
    },
    jersy8: {
      image: jersy8Image,
      name: 'Rohit IPL Jersey',
      description: 'Wear the spirit of Rohit Sharma in the IPL with this vibrant jersey.',
      price: 1800,
      ratingsCount: {
        5: 310,
        4: 175,
        3: 85,
        2: 25,
        1: 5,
      },
      features: ['Stylish print', 'Lightweight', 'Perfect for matches'],
      availableSizes: ['S', 'M', 'L'],
    },
    jersy9: {
      image: jersy9Image,
      name: 'Hardik Jersey',
      description: 'Replicate Hardik Pandya’s style on the field with this exclusive jersey.',
      price: 2100,
      ratingsCount: {
        5: 250,
        4: 140,
        3: 60,
        2: 20,
        1: 10,
      },
      features: ['Vibrant colors', 'Comfortable fit', 'Suitable for all occasions'],
      availableSizes: ['S', 'M', 'L', 'XL'],
    },
    jersy10: {
      image: jersy10Image,
      name: 'Virat IPL Jersey',
      description: 'Celebrate IPL with this stylish jersey inspired by Virat Kohli.',
      price: 2400,
      ratingsCount: {
        5: 310,
        4: 180,
        3: 90,
        2: 20,
        1: 5,
      },
      features: ['Dynamic design', 'Perfect for fans', 'High comfort level'],
      availableSizes: ['M', 'L', 'XL'],
    },
    jersy11: {
      image: jersy11Image,
      name: 'Dhoni IPL Jersey',
      description: 'A tribute to MS Dhoni, this jersey combines style with comfort.',
      price: 1900,
      ratingsCount: {
        5: 330,
        4: 190,
        3: 75,
        2: 20,
        1: 8,
      },
      features: ['Soft material', 'Classic cut', 'Ideal for match day'],
      availableSizes: ['S', 'M', 'L', 'XL'],
    },
    jersy12: {
      image: jersy12Image,
      name: 'India Jersey',
      description: 'Show your support for the Indian team with this official jersey.',
      price: 2500,
      ratingsCount: {
        5: 300,
        4: 160,
        3: 70,
        2: 15,
        1: 5,
      },
      features: ['Comfortable fit', 'Stylish design', 'Breathable fabric'],
      availableSizes: ['M', 'L'],
    },
    jersy13: {
      image: jersy13Image,
      name: 'India Jersey',
      description: 'Celebrate Indian cricket with this comfortable jersey.',
      price: 1400,
      ratingsCount: {
        5: 270,
        4: 150,
        3: 60,
        2: 25,
        1: 10,
      },
      features: ['Moisture-wicking', 'Durable material', 'Stylish look'],
      availableSizes: ['S', 'M', 'L', 'XL'],
    },
    jersy14: {
      image: jersy14Image,
      name: 'Gill Jersey',
      description: 'A stylish jersey inspired by young talent Shubman Gill.',
      price: 1400,
      ratingsCount: {
        5: 220,
        4: 130,
        3: 50,
        2: 20,
        1: 10,
      },
      features: ['Lightweight fabric', 'Perfect for casual wear', 'Easy to maintain'],
      availableSizes: ['M', 'L'],
    },
    jersy15: {
      image: jersy15Image,
      name: 'Ishan Jersey',
      description: 'Wear the spirit of Ishan Kishan with this vibrant jersey.',
      price: 1400,
      ratingsCount: {
        5: 250,
        4: 140,
        3: 60,
        2: 20,
        1: 8,
      },
      features: ['Bold colors', 'Comfortable fit', 'Suitable for fans'],
      availableSizes: ['S', 'M', 'L', 'XL'],
    },
  };
  

const Item2= () => {
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

export default Item2;

