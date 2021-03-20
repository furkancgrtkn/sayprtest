import React, { useEffect, useState } from "react";
import styles from "../css/HomePage.module.css";
import UserCard from "../components/UserCard";
import axios from "axios";
import Loader from "../components/Loader";
const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileImages = async (usersData) => {
      try {
        usersData.map(async (userData) => {
          const resp = await axios.get(
            `https://avatars.dicebear.com/v2/avataaars/${userData.username}.svg?options[mood][]=happy`
          );
          setUsers((prev) => {
            return [...prev, { ...userData, avatar: resp.data }];
          });
        });
      } catch (error) {
        console.log(error);
      }
    };
    (async function fetchUsers() {
      try {
        setLoading(true);
        const resp = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        await fetchProfileImages(resp.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const deleteUser = (userID) => {
    let filteredUsers = users.filter((user) => user.id !== userID);
    setUsers(filteredUsers);
  };

  const editUser = (editedUser, e) => {
    e.preventDefault();
    setUsers((prevState) => {
      return prevState.map((user) => {
        if (user.id === editedUser.id) {
          return { ...user, ...editedUser };
        } else {
          return user;
        }
      });
    });
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <div className={styles.container}>
      {users.map((user, index) => (
        <UserCard
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          editUser={editUser}
        />
      ))}
    </div>
  );
};

export default HomePage;
