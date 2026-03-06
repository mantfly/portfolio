import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function WorkDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="work-detail">
        <Link to="/works" className="back-button">Back</Link>
        <p>No project found</p>
      </div>
    );
  }

  return (
    <article className="work-detail">
      <Link to="/works" className="back-button">Back</Link>

      {/* 头部信息：标题 + 公司/时间/角色 */}
      <div className="detail-header">
        <h1 className="detail-title">{project.title}</h1>
        <p className="detail-meta">
          {project.company} • {project.year} • {project.role}
        </p>
      </div>

      {/* 引言区 - 项目背景介绍 */}
      <div className="detail-intro">
        <p>{project.intro}</p>
      </div>

      {/* 在引言和第一个分隔线之间插入图片 */}
      {project.contentImage && (
        <img src={project.contentImage} alt="Process" className="content-image" />
      )}
      
      {/* 分隔线 */}
      <hr className="detail-divider" />

      {project.content?.map((item, idx) => (
        <div key={idx}>
          {item.type === "text" && <p className="section-text">{item.content}</p>}
          {item.type === "image" && (
            <figure className="content-figure">
              <img src={item.src} alt={item.caption} className="content-image" />
              {item.caption && <figcaption className="image-caption">{item.caption}</figcaption>}
            </figure>
          )}
        </div>
      ))}
      {/* 9宫格拼图 */}
      {project.gridImages && (
        <div className="image-grid">
          {project.gridImages.map((img, idx) => (
            <div key={idx} className="grid-cell">
              <img src={img} alt={`${project.title} ${idx + 1}`} />
            </div>
          ))}
        </div>
      )}
      {/* 图片区域 - Visual matches 部分 */}
      {project.visualMatches && (
        <div className="detail-section">
          <h2 className="section-title">{project.visualMatches.title}</h2>
          <div className="image-grid-compact">
            {project.visualMatches.images.map((img, idx) => (
              <figure key={idx} className="image-card-compact">
                <div className="image-wrapper-compact">
                  <img src={img.src} alt={img.caption || `Visual match ${idx + 1}`} />
                </div>
                {img.caption && (
                  <figcaption className="image-caption">+ {img.caption}</figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      )}

      {/* 补充说明 - Multisearch Searchbox 部分 */}
      {project.additionalContent && (
        <>
          <hr className="detail-divider" />
          <div className="detail-section">
            <h2 className="section-title">{project.additionalContent.title}</h2>
            <p className="section-text">{project.additionalContent.description}</p>
          </div>
        </>
      )}

      {/* 相关链接 */}
      {project.links && project.links.length > 0 && (
        <>
          <hr className="detail-divider" />
          <div className="detail-section">
            <h2 className="section-title">Featured links:</h2>
            <ul className="links-list">
              {project.links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </article>
  );
}