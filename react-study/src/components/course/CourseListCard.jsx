import CourseItem from "./CourseItem";
export default function CourseListCard(props) {
  // const invertedColor = {
  //   background: "black",
  //   color: "white",
  // };
  return (
    <div className="card" style={{ background: "black", color: "white" }}>
      <div className="card__header">강의 목록</div>
      <div className="card__body">
        <div className="courses">
          <CourseItem />
          <CourseItem />
          <CourseItem />
        </div>
      </div>
    </div>
  );
}
