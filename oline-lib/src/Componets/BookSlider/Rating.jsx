import "./Rating.css";

export default function Rating({ rating ,reviews }) {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <i
          key={value}
          className={
            rating >= value
              ? "bi bi-star-fill star-fill"
              : rating >= value - 0.5
              ? "bi bi-star-half star-half"
              : "bi bi-star star-vide"
          }
        ></i>
      ))}
      <span>{rating}</span>
      <span>{reviews}</span>
    </div>
  );
  
}