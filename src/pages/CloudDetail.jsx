import { Link } from "react-router-dom";

export default function CloudDetail() {
  return (
    <div className="blackbg-fullscreen">
      {/* 固定的返回按钮 */}
      <Link to="/works" className="hmi-back-button-fixed">
        Back
      </Link>
      
      {/* 可滚动的图片区域 */}
      <div className="hmi-scrollable-content">
        <div className="hmi-grid-9">
          <img src="/img/yun/yun1.png" alt="HMI detail 1" />
          <img src="/img/yun/yun2.png" alt="HMI detail 2" />
          <img src="/img/yun/yun3.png" alt="HMI detail 3" />
          <img src="/img/yun/yun4.png" alt="HMI detail 4" />
        </div>
      </div>
    </div>
  );
}