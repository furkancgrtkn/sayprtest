import React, { useState } from "react";
import styles from "../css/UserCard.module.css";
const UserCard = ({ user, deleteUser }) => {
  const [favorite, setFavorite] = useState(false);
  return (
    <div className={styles.card}>
      <div className={styles.cardAvatar}>
        <div dangerouslySetInnerHTML={{ __html: user.avatar }}></div>
      </div>
      <h1>{user.name}</h1>
      <ul className={styles.cardInfos}>
        <li>
          <i className="fas fa-envelope"></i> <span>{user.email}</span>
        </li>
        <li>
          <i className="fas fa-phone"></i> <span>{user.phone}</span>
        </li>
        <li>
          <i className="fas fa-globe"></i> <span>{user.website}</span>
        </li>
      </ul>
      <div className={styles.cardButtons}>
        <button onClick={() => setFavorite(!favorite)}>
          <i
            style={favorite ? { color: "#FE8484" } : null}
            className="fas fa-heart"
          ></i>
        </button>
        <button>
          <i className="fas fa-pen"></i>
        </button>
        <button onClick={() => deleteUser(user.id)}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default UserCard;
