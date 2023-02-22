/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { numberWithCommas } from "../../../utils/currency";
import { Button } from "../../Button";
import "./Main.scss";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "../../Modal/Modal";

function MainProduct({ product = {}, banks = {} }) {
  const [showModal, setShowModal] = React.useState(false);

  const renderModal = () => {
    return (
      <Modal
        show={showModal}
        setShow={setShowModal}
        // hideCloseButton
      >
        <ModalHeader>
          <h3>Modal header</h3>
        </ModalHeader>
        <ModalBody>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            maxime dolorem asperiores laboriosam ad delectus ea. Tempora tempore
            repellendus laudantium fugiat saepe mollitia eius illo possimus
            laborum consequuntur, tenetur neque.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button class="btn btn-danger sm" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button
            class="btn btn-success lg"
            onClick={() => setShowModal(false)}
          >
            Mua
          </Button>
        </ModalFooter>
      </Modal>
    );
  };

  return (
    <div className="main-products">
      {showModal && renderModal()}
      <div className="main-product">
        {/* Video Slide Demo */}
        <iframe
          src={product.VideoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="main-product">
        <div className="main-buy">
          <div className="meta-price">
            <span className="sale-price">
              {numberWithCommas(product.Price)}đ
            </span>
            <div className="saving">
              <span className="price">
                {numberWithCommas(product.SaledPrice)}đ
              </span>
              <span className="sale-price hidden-pc"></span>
              <span className="save-to">
                <span className="hidden-mb">Tiết kiệm&nbsp;</span>
                {product.Discount}%
              </span>
            </div>
          </div>
          {banks &&
            banks?.map((item, key) => (
              <div key={key}>
                <h2>Ngân hàng: {item.BankName}</h2>
                <h3>Số ngân hàng: {item.AccountNumber}</h3>
                <img src={item.QrCode} alt={item.BankName} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MainProduct;
