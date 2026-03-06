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
          <img src="/public/img/hmi/1.png" alt="HMI detail 1" />
          <img src="/public/img/hmi/2.png" alt="HMI detail 2" />
          <img src="/public/img/hmi/3.png" alt="HMI detail 3" />
          <img src="/public/img/hmi/4.png" alt="HMI detail 4" />
          <img src="/public/img/hmi/5.png" alt="HMI detail 5" />
          <img src="/public/img/hmi/6.png" alt="HMI detail 6" />
          <img src="/public/img/hmi/7.png" alt="HMI detail 7" />
          <img src="/public/img/hmi/8.png" alt="HMI detail 8" />
          <img src="/public/img/hmi/9.png" alt="HMI detail 9" />
        </div>
      </div>
    </div>
  );
}