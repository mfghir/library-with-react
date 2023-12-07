import { useState } from "react";
import { books } from "../constants/mockData";
import BookCard from "./BookCard";

const Books = () => {
  const [liked, setLiked] = useState([]);

  const handleLikedList = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((i) => i.id !== book.id);
      setLiked(newLikedList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };

  return (
    <div>
      <div>
        {books.map((book) => (
          <BookCard
            key={book.id}
            data={book}
            handleLikedList={handleLikedList}
          />
        ))}
      </div>

      {!!liked.length && <div className=""></div>}
    </div>
  );
};

export default Books;
