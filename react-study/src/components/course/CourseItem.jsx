function HeartIconBtn({ isFavorite = false }) {
  return (
    <button className="btn">
      <img className="btn__img" src={isFavorite ? "/img/heart-fill-icon.svg" : "/img/heart-icon.svg"} />
    </button>
  );
}

function LinkIconBtn({ link }) {
  return (
    <a className="btn" href={link} target="__blank" rel="noreferrer">
      <img className="btn__img" src="/img/link-icon.svg" alt="" />
    </a>
  );
}

export default function CourseItem({ title, description, thumbnail, isFavorite, link }) {
  return (
    <article className="course">
      <img className="course__img" src={thumbnail} alt="강의 이미지" />
      <div className="course__body">
        <div className="course__title">{title}</div>
        <div className="course__description">{description}</div>
      </div>
      <div className="course__icons">
        {link && <LinkIconBtn link={link} />}
        <HeartIconBtn isFavorite={isFavorite} />
      </div>
    </article>
  );
}
