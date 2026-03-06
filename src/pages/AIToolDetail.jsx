import { Link } from "react-router-dom";

export default function HMIDetail() {
  return (
    <div className="blackbg-fullscreen">
      {/* 固定的返回按钮 */}
      <Link to="" className="hmi-back-button-fixed">
        Back
      </Link>
      
      {/* 可滚动的图片区域 */}
      <div className="hmi-scrollable-content">
        <div className="hmi-grid-9">
          <img src="/public/img/hear/hear1.png" alt="HMI detail 1" />
          <img src="/public/img/hear/hear2.png" alt="HMI detail 2" />
          <img src="/public/img/hear/hear3.png" alt="HMI detail 3" />
          <img src="/public/img/hear/hear4.png" alt="HMI detail 4" />
          <img src="/public/img/hear/hear5.png" alt="HMI detail 5" />
          <img src="/public/img/hear/hear6.png" alt="HMI detail 6" />
          <img src="/public/img/hear/hear7.png" alt="HMI detail 6" />
          <img src="/public/img/hear/hear8.png" alt="HMI detail 6" />

        </div>
      </div>
    </div>
  );
}