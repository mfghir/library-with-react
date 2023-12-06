
const BookCard = ({ data: { title, author, image, language, pages } }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{author}</p>

        <div>
          <span>{language}</span>
          <span>{pages} pages</span>
        </div>

        <button>like</button>
      </div>
    </div>
  );
};

export default BookCard;
