import { Link } from "react-router-dom";

export default function PlatformDetail() {
  return (
    <div className="whitebg-fullscreen">
      {/* 固定的返回按钮 */}
      <Link to="" className="hmi-back-button-fixed">
        Back
      </Link>
      
      {/* 可滚动的图片区域 */}
      <div className="hmi-scrollable-content">
        <div className="hmi-grid-9">
          <img src="/img/solution.png" alt="HMI detail 1" />

        </div>
      </div>
    </div>
  );
}