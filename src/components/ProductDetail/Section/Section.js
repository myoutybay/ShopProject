import Main from "../Main";
import { converDateTime } from "../../../utils/date-time";
import "./Section.scss";

function Section({ product = {}, banks = {} }) {
  const { ProductName, CreatedDate, User } = product;
  return (
    <section className="section-layout">
      <div className="section-container">
        <div className="rate">
          <div className="rate-enroll">
            <i className="fal fa-user rate__icon"></i>
            <span className="rate-enroll__number">1036 đã tải.</span>
          </div>
        </div>
        <h1 className="title">{ProductName}</h1>
        <div className="meta">
          <a className="meta-author" href={"/user/" + User?.UserName}>
            Bởi: <strong>{User?.Employee?.FullName}</strong>
          </a>
          <span className="meta-date">{converDateTime(CreatedDate)}</span>
        </div>
        <Main product={product} banks={banks} />
      </div>
    </section>
  );
}

export default Section;
