import CourseItem from "./CourseItem";
export default function CourseListCard({ items }) {
  // const invertedColor = {
  //   background: "black",
  //   color: "white",
  // };
  const [course1, course2, course3] = items;
  return (
    // style={{ background: "black", color: "white" }}
    <div className="card">
      <div className="card__header">강의 목록</div>
      <div className="card__body">
        <div className="courses">
          <CourseItem {...course1} />
          <CourseItem {...course2} />
          <CourseItem {...course3} />
        </div>
      </div>
    </div>
  );
}
