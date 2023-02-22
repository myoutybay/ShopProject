import "./Content.scss";
function Content({ product = {} }) {
  return (
    <div className="content-layout">
      <section
        className="content"
        dangerouslySetInnerHTML={{ __html: product.Content }}
      ></section>
    </div>
  );
}

export default Content;
