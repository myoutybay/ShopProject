import "./Author.scss";
import Portfolio from "../Portfolio";
function Author({ product = {} }) {
  return (
    <div className="author__item">
      <div className="author__image">
        <Portfolio user={product?.User} />
      </div>
      <div className="author__info">
        <h2 className="author__name">
          <a className="author__link" href={"/user/" + product?.User?.UserName}>
            {product?.User?.Employee?.FullName}
          </a>
        </h2>
        <div className="author__rating">
          {/* <div className="rating-stars">
            <input type="radio" value="10" checked="" />
            <label htmlFor="star10"></label>
            <input type="radio" value="9" />
            <label htmlFor="star9" className="half"></label>
            <input type="radio" value="8" />
            <label htmlFor="star8"></label>
            <input type="radio" value="7" />
            <label htmlFor="star7" className="half"></label>
            <input type="radio" value="6" />
            <label htmlFor="star6"></label>
            <input type="radio" value="5" />
            <label htmlFor="star5" className="half"></label>
            <input type="radio" value="4" />
            <label htmlFor="star4"></label>
            <input type="radio" value="3" />
            <label htmlFor="star3" className="half"></label>
            <input type="radio" value="2" />
            <label htmlFor="star2"></label>
            <input type="radio" value="1" />
            <label htmlFor="star1" className="half"></label>
          </div> */}
        </div>
        <p className="author__desc">{product?.User?.Employee?.DetailVi}</p>
      </div>
    </div>
  );
}

export default Author;
