import { ReactComponent as RatingImg } from "../../assets/star-solid.svg";

function FlatBody({ title, location, tags, host, rating }) {
  const ratingArray = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="contain-titles">
        <h1>{title}</h1>
        <h3>{location}</h3>
        <div className="tags">
          {tags.map((tag, index) => (
            <p key={`${tag}-${index}`}>{tag}</p>
          ))}
        </div>
      </div>
      <div className="rating-name-avatar">
        <div className="star-container">
          {ratingArray.map((number, index) => (
            <RatingImg
              className={
                Number(rating) >= number ? "rating-fill" : "rating-empty"
              }
              key={`${number}-${index}`}
            />
          ))}
        </div>
        <div className="host">
          <div className="name">
            {host.name.split(" ").map((element, index) => (
              <span key={`${element}-${index}`}>{element}</span>
            ))}
          </div>
          <img src={host.picture} alt={`avatar de ${host.name}`} />
        </div>
      </div>
    </>
  );
}

export default FlatBody;
