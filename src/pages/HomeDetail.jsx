import { Link } from "react-router-dom";

export default function HomeDetail() {
  return (
    <div className="whitebg-fullscreen">
      {/* 固定的返回按钮 */}
      <Link to="" className="hmi-back-button-fixed">
        Back
      </Link>
      
      {/* 可滚动的图片区域 */}
      <div className="hmi-scrollable-content">
        <div className="hmi-grid-9">
          <img src="/img/home/home1.png" alt="HMI detail 1" />
          <img src="/img/home/home2.png" alt="HMI detail 2" />
          <img src="/img/home/home3.png" alt="HMI detail 3" />
          <img src="/img/home/home4.png" alt="HMI detail 6" />
          <img src="/img/home/home5.png" alt="HMI detail 6" />
          <img src="/img/home/home6.png" alt="HMI detail 6" />
          <img src="/img/home/home7.png" alt="HMI detail 6" />
          <img src="/img/home/home8.png" alt="HMI detail 6" />
          <img src="/img/home/home9.png" alt="HMI detail 6" />
          <img src="/img/home/home10.png" alt="HMI detail 6" />
          <img src="/img/home/home11.png" alt="HMI detail 6" />
          <img src="/img/home/home12.png" alt="HMI detail 6" />
        </div>
      </div>
    </div>
  );
}