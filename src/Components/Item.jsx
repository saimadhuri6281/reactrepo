// src/Components/Item.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import game1Image from '../Assets/game1.jpg'; // Importing the image
import game2Image from '../Assets/game2.jpg'; // Importing the image
import game3Image from '../Assets/game3.jpg'; // Importing the image
import game4Image from '../Assets/game4.jpg'; // Importing the image
import game5Image from '../Assets/game5.jpg'; // Importing the image
import game6Image from '../Assets/game6.jpg'; // Importing the image
import game7Image from '../Assets/game7.jpg'; // Importing the image
import game8Image from '../Assets/game8.jpg'; // Importing the image
import game9Image from '../Assets/game9.jpg'; // Importing the image
import game10Image from '../Assets/game10.jpg'; // Importing the image
import game11Image from '../Assets/game11.jpg'; // Importing the image
import game12Image from '../Assets/game12.jpg'; // Importing the image
import game13Image from '../Assets/game13.jpg'; // Importing the image
import game14Image from '../Assets/game14.jpg'; // Importing the image
import game15Image from '../Assets/game15.jpg'; // Importing the image

const products = {
  game1: {
    image: game1Image,
    name: 'Carrom Board',
    description: `A carrom board is a popular tabletop game that originated in India. 
                  It is played by flicking wooden discs, called carrom men, into corner 
                  pockets on a square board. The objective is to pocket all your carrom 
                  men before your opponent does. The game is not only fun but also 
                  promotes strategic thinking and hand-eye coordination.`,
    price: 2000,
    ratingsCount: {
      5: 250,
      4: 150,
      3: 75,
      2: 30,
      1: 10,
    },
  },
  game2: {
    image: game2Image,
    name: 'Carrom Board 2',
    description: `A carrom board is a popular tabletop game that originated in India. 
                  It is played by flicking wooden discs, called carrom men, into corner 
                  pockets on a square board. The objective is to pocket all your carrom 
                  men before your opponent does. The game is not only fun but also 
                  promotes strategic thinking and hand-eye coordination.`,
    price: 1700,
    ratingsCount: {
      5: 250,
      4: 150,
      3: 75,
      2: 30,
      1: 10,
    },
  },
  game3: {
    image: game3Image,
    name: 'COMBO Pack',
    description: `Bring home the ultimate gaming experience with our Carroms, Chess, and 
                  Ludo Combo Pack. It’s time to gather your loved ones, create unforgettable 
                  memories, and enjoy hours of fun!`,
    features: [
      "All-in-One Pack: Enjoy three classic games in one convenient package.",
      "Quality Materials: Each game is made from high-quality materials to ensure durability and longevity.",
      "Perfect for Any Occasion: Great for family gatherings, parties, or as a gift for game enthusiasts.",
      "Enhances Skills: Develops strategic thinking, problem-solving, and social interaction."
    ],
    price: 2200,
    ratingsCount: {
      5: 256,
      4: 153,
      3: 75,
      2: 30,
      1: 16,
    },
  },
  game4: {
    image: game4Image,
    name: 'Playing Rings',
    description: `Discover the joy of Playing Rings, a traditional game that combines precision, strategy, 
                  and fun for players of all ages. This engaging activity is perfect for family gatherings, 
                  picnics, or parties, providing endless entertainment and a chance to showcase your skills.`,
    features: [
      "Easy to Learn, Hard to Master: Accessible for everyone, from young children to adults.",
      "Durable Materials: High-quality, lightweight rings that withstand frequent use.",
      "Portable Design: Compact and easy to carry for outdoor fun.",
      "Develops Hand-Eye Coordination: Enhances motor skills through accurate aiming and throwing.",
      "Ideal for All Occasions: Great for birthdays, reunions, or casual get-togethers.",
      "Customizable Challenges: Set different rules and distances for strategic play."
    ],
    price: 2200,
    ratingsCount: {
      5: 250,
      4: 150,
      3: 75,
      2: 30,
      1: 10,
    },
  },
  game5: {
    image: game5Image,
    name: 'ARROW GAME',
    description: `Throw Arrow Games: Precision and Fun Combined! Experience the excitement of this captivating game that brings friends and family together for hours of competitive fun, whether in your backyard, at a party, or during family gatherings.`,
    features: [
        "Durable Materials: Made from high-quality, durable materials that withstand the test of time.",
        "Portable Design: Compact and lightweight, easy to carry for outdoor fun.",
        "Develops Hand-Eye Coordination: Enhances essential skills like concentration and accuracy.",
        "Ideal for All Occasions: Perfect for birthday parties, family reunions, or casual get-togethers."
    ],
    price: 2900,
    ratingsCount: {
        5: 250,
        4: 150,
        3: 75,
        2: 30,
        1: 10,
    },
},
game6: {
  image: game6Image,
    name: 'ARROW GAME',
    description: `Throw Arrow Games: Precision and Fun Combined! Experience the thrill of Throw Arrow Games, a captivating blend of skill, strategy, and excitement that appeals to players of all ages. This traditional game brings friends and family together for hours of competitive fun, whether in your backyard, at a party, or during family gatherings.`,
    features: [
        "Durable Materials: Made from high-quality, durable materials that withstand the test of time.",
        "Portable Design: Compact and lightweight, easy to carry for outdoor fun.",
        "Develops Hand-Eye Coordination: Enhances essential skills like concentration and accuracy.",
        "Ideal for All Occasions: Perfect for birthday parties, family reunions, or casual get-togethers."
    ],
    price: 2900,
    ratingsCount: {
        5: 250,
        4: 150,
        3: 75,
        2: 30,
        1: 10,
    },
},
game7: {
  image: game7Image,
    name: 'ARROW GAME',
    description: `Throw Arrow Games: Precision and Fun Combined! Experience the thrill of Throw Arrow Games, a captivating blend of skill, strategy, and excitement that appeals to players of all ages. This traditional game brings friends and family together for hours of competitive fun, whether in your backyard, at a party, or during family gatherings.`,
    features: [
        "Durable Materials: Made from high-quality, durable materials that withstand the test of time.",
        "Portable Design: Compact and lightweight, easy to carry for outdoor fun.",
        "Develops Hand-Eye Coordination: Enhances essential skills like concentration and accuracy.",
        "Ideal for All Occasions: Perfect for birthday parties, family reunions, or casual get-togethers."
    ],
    price: 1900, 
    ratingsCount: {
        5: 250,
        4: 150,
        3: 75,
        2: 30,
        1: 10,
    },
},
game8: {
  image: game8Image,
    name: 'OWL SHOOT',
    description: `Throw Arrow Games: Precision and Fun Combined! Experience the thrill of Throw Arrow Games, a captivating blend of skill, strategy, and excitement that appeals to players of all ages. This traditional game brings friends and family together for hours of competitive fun, whether in your backyard, at a party, or during family gatherings.`,
    features: [
        "Durable Materials: Made from high-quality, durable materials that withstand the test of time.",
        "Portable Design: Compact and lightweight, easy to carry for outdoor fun.",
        "Develops Hand-Eye Coordination: Enhances essential skills like concentration and accuracy.",
        "Ideal for All Occasions: Perfect for birthday parties, family reunions, or casual get-togethers."
    ],
    price: 2900,
    ratingsCount: {
        5: 299,
        4: 156,
        3: 75,
        2: 30,
        1: 10,
    },
},
game9: {
  image: game9Image,
    name: 'CHESS',
    description: `Chess: A Game of Strategy and Skill! Delve into the classic game of Chess, where each move counts and strategic thinking reigns supreme. Perfect for players of all ages, Chess offers endless opportunities for competition and growth, whether played at home, in clubs, or online.`,
    features: [
        "Game Pieces: Each player controls 16 pieces: 1 king, 1 queen, 2 rooks, 2 knights, 2 bishops, and 8 pawns, each with unique movements.",
        "Strategic Depth: A game of strategy, tactics, and foresight, offering a rich experience for beginners and seasoned players.",
        "Cognitive Development: Enhances critical thinking, problem-solving skills, and concentration.",
        "Universal Appeal: Transcends age and culture, making it perfect for gatherings and social interactions."
    ],
    price: 2900, 
    ratingsCount: {
        5: 168,
        4: 156,
        3: 75,
        2: 30,
        1: 10,
    },
},
game10: {
  image: game10Image,
    name: 'Magnetic Chess',
    description: `Experience the convenience of Magnetic Chess, the perfect blend of traditional gameplay and portability. Designed for chess enthusiasts on the go, this magnetic version ensures that your game stays intact, whether at home, on a trip, or at a friend’s house.`,
    features: [
        "Magnetic Pieces: Each piece is equipped with a strong magnet, keeping them securely in place on the board.",
        "Portable Design: Compact and lightweight, making them ideal for travel, picnics, or family outings.",
        "Durable Construction: Made from high-quality materials, ensuring long-lasting enjoyment.",
        "Ideal for All Ages: Suitable for kids and adults alike, promoting strategic thinking and friendly competition."
    ],
    price: 3900,
    ratingsCount: {
        5: 168,
        4: 156,
        3: 75,
        2: 30,
        1: 10,
    },
},
game11: {
  image: game11Image,
    name: 'Chess',
    description: `Experience the convenience of Magnetic Chess, the perfect blend of traditional gameplay and portability. Designed for chess enthusiasts on the go, this magnetic version ensures that your game stays intact, whether at home, on a trip, or at a friend’s house.`,
    features: [
       "Game Pieces: Each player controls 16 pieces: 1 king, 1 queen, 2 rooks, 2 knights, 2 bishops, and 8 pawns, each with unique movements.",
        "Strategic Depth: A game of strategy, tactics, and foresight, offering a rich experience for beginners and seasoned players.",
        "Cognitive Development: Enhances critical thinking, problem-solving skills, and concentration.",
        "Universal Appeal: Transcends age and culture, making it perfect for gatherings and social interactions."
    ],
    price: 2500,
    ratingsCount: {
        5: 168,
        4: 156,
        3: 75,
        2: 30,
        1: 10,
    },
},
game12: {
  image: game12Image,
    name: 'JUMBO-PACK',
    description: `Experience the convenience of this pack, the perfect blend of traditional gameplay and portability. Designed for chess enthusiasts on the go, this magnetic version ensures that your game stays intact, whether at home, on a trip, or at a friend’s house.`,
    features: [
        "Ludo: Engage in strategic gameplay while racing to the finish.",
        "Snakes and Ladders: A classic game of chance that’s great for all ages.",
        "Checkers: Test your tactical skills with this simple yet strategic game.",
        "Tic Tac Toe: A quick and easy game to challenge your friends.",
        "Dominoes: Enjoy a game that combines strategy and luck with this timeless classic.",
        "Playing Cards: Perfect for a variety of games, from Poker to Rummy."
    ],
    price: 2400, 
    ratingsCount: {
        5: 168,
        4: 156,
        3: 75,
        2: 30,
        1: 10,
    },
},
game13: {
  image: game13Image,
    name: 'JUMBO SEQUENCE',
    description: `Dive into the exciting world of Jumbo Sequence, a game that combines strategy and luck in a fun, engaging way. Perfect for family game nights or gatherings with friends, this game is designed for players of all ages, making it a fantastic addition to your indoor game collection.`,
    features: [
        "Family-Friendly Gameplay: Suitable for players of all ages, fostering bonding and interaction.",
        "Strategic Thinking: Plan your moves carefully to outsmart your opponents and achieve victory.",
        "Colorful Board: The visually appealing board enhances the gaming experience and keeps players engaged.",
        "Easy to Learn: Simple rules make it accessible for beginners while offering depth for seasoned players.",
        "Portable Design: Great for parties, picnics, or travel, ensuring you can enjoy fun anytime, anywhere.",
        "Multiple Game Modes: Offers a variety of ways to play, keeping the excitement fresh and dynamic."
    ],
    price: 2900, 
    ratingsCount: {
        5: 168,
        4: 156,
        3: 75,
        2: 30,
        1: 10,
    },
},
game14: {
  image: game14Image,
    name: 'TABLE TENNIS',
    description: `Get ready for fast-paced action with Table Tennis! This thrilling indoor sport is perfect for players of all skill levels, providing an exciting way to improve reflexes, hand-eye coordination, and fitness. Whether played competitively or for fun, Table Tennis is a fantastic way to engage friends and family in friendly matches.`,
    features: [
        "Fast-Paced Gameplay: Enjoy quick rallies that keep the excitement high and players on their toes.",
        "Skill Development: Enhance your coordination and reflexes while mastering techniques and strategies.",
        "Compact Design: Perfect for indoor play, making it suitable for homes, clubs, and recreation centers.",
        "Complete Set: Includes paddles, balls, and a net, providing everything you need to start playing.",
        "Suitable for All Ages: Easy to learn and play, making it a great option for both kids and adults.",
        "Versatile Play: Ideal for singles or doubles matches, allowing for a variety of playing styles."
    ],
    price: 1800,
    ratingsCount: {
        5: 168,
        4: 156,
        3: 75,
        2: 30,
        1: 10,
    },
},
game15: {
  image: game15Image,
    name: 'TABLE TENNIS',
    description: `Get ready for fast-paced action with Table Tennis! This thrilling indoor sport is perfect for players of all skill levels, providing an exciting way to improve reflexes, hand-eye coordination, and fitness. Whether played competitively or for fun, Table Tennis is a fantastic way to engage friends and family in friendly matches.`,
    features: [
        "Fast-Paced Gameplay: Enjoy quick rallies that keep the excitement high and players on their toes.",
        "Skill Development: Enhance your coordination and reflexes while mastering techniques and strategies.",
        "Compact Design: Perfect for indoor play, making it suitable for homes, clubs, and recreation centers.",
        "Complete Set: Includes paddles, balls, and a net, providing everything you need to start playing.",
        "Suitable for All Ages: Easy to learn and play, making it a great option for both kids and adults.",
        "Versatile Play: Ideal for singles or doubles matches, allowing for a variety of playing styles."
    ],
    price: 2900,
    ratingsCount: {
        5: 168,
        4: 156,
        3: 75,
        2: 30,
        1: 10,
    },
},

};

const Item = () => {
  const { id } = useParams();
  const product = products[id];

  const [cartCount, setCartCount] = useState(0);
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

 
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
    setComment('');
  };

  const handleGoBack = () => {
    navigate(-1); 
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

export default Item;

