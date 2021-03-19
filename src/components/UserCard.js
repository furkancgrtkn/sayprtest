import React, { useState } from "react";
import styles from "../css/UserCard.module.css";
import Modal from "./Modal";
const UserCard = ({ user, deleteUser, editUser }) => {
  const [favorite, setFavorite] = useState(false);
  const [modalDisplay, setModalDisplay] = useState(false);
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [website, setWebsite] = useState(user.website);
  const [email, setEmail] = useState(user.email);

  const editFormFunc = (e, userInfo) => {
    e.preventDefault();
    let editedUser = {
      ...userInfo,
      name,
      phone,
      email,
      website,
    };
    editUser(editedUser, e);
    setTimeout(() => {
      setModalDisplay(false);
    }, 250);
  };

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
        <Modal
          eventFunc={setModalDisplay}
          eventHandle={modalDisplay}
          trigger={
            <button onClick={() => setModalDisplay(!modalDisplay)}>
              <i className="fas fa-pen"></i>
            </button>
          }
        >
          <form
            onSubmit={(e) => editFormFunc(e, user)}
            className={styles.editForm}
          >
            <div>
              <label>Name</label>
              <input
                defaultValue={user.name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                maxLength="20"
                required
              ></input>
            </div>

            <div>
              <label>E-Mail</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                defaultValue={user.email}
                type="email"
                maxLength="30"
                required
              ></input>
            </div>

            <div>
              <label>Phone</label>

              <input
                onChange={(e) => setPhone(e.target.value)}
                defaultValue={user.phone}
                type="text"
                maxLength="30"
                required
              ></input>
            </div>

            <div>
              <label>Website</label>
              <input
                onChange={(e) => setWebsite(e.target.value)}
                defaultValue={user.website}
                type="text"
                maxLength="30"
                required
              ></input>
            </div>
            <button type="submit">SUBMIT</button>
          </form>
        </Modal>
        <button onClick={() => deleteUser(user.id)}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default UserCard;
