import { Link } from "react-router-dom";

export default function WorkshopDesignThinking() {
  return (
    <div className="whitebg-fullscreen">
      {/* 固定的返回按钮 */}
      <Link to="/works" className="hmi-back-button-fixed">
        Back
      </Link>
      
      {/* 可滚动的图片区域 */}
      <div className="hmi-scrollable-content">
        <div className="hmi-grid-9">
          <img src="/public/img/workshop/workshop1.png" alt="HMI detail 1" />
          <img src="/public/img/workshop/workshop2.png" alt="HMI detail 2" />
          <img src="/public/img/workshop/workshop3.png" alt="HMI detail 3" />

        </div>
      </div>
    </div>
  );
}