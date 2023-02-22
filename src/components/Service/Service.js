import "./Service.scss";
import serviceicon from "../../assets/images/graphics.png";
import atomicon from "../../assets/images/atom.png";
import callcentericon from "../../assets/images/call_center.png";
import bagicon from "../../assets/images/bag.png";
function Service() {
  return (
    <div className="service mt-1">
      <div className="service-item">
        <div className="icon">
          <img
            className="service-item-image"
            alt="services"
            src={serviceicon}
          />
        </div>
        <div className="info">
          <h3 className="title3">CODE PHONG PHÚ</h3>
          <div style={{ textAlign: "center" }}>Đầy đủ các thể loại...</div>
        </div>
      </div>
      <div className="service-item">
        <div className="icon">
          <img className="service-item-image" alt="services" src={atomicon} />
        </div>
        <div className="info">
          <h3 className="title3">CODE CHẤT LƯỢNG</h3>
          <div style={{ textAlign: "center" }}>
            Cam kết hỗ trợ &amp; liên hệ
          </div>
        </div>
      </div>
      <div className="service-item">
        <div className="icon">
          <img
            className="service-item-image"
            alt="services"
            src={callcentericon}
          />
        </div>

        <div className="info">
          <h3 className="title3">HỖ TRỢ 24/7</h3>
          <div style={{ textAlign: "center" }}>
            Giao dịch &amp; download code
          </div>
        </div>
      </div>
      <div className="service-item">
        <div className="icon">
          <img className="service-item-image" alt="services" src={bagicon} />
        </div>
        <div className="info">
          <h3 className="title3">THANH TOÁN</h3>
          <div style={{ textAlign: "center" }}>Thanh toán đảm bảo</div>
        </div>
      </div>
    </div>
  );
}

export default Service;
