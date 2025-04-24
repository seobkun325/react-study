import CourseItem from "./CourseItem";
import Card from "../Card";
export default function CourseListCard({ items }) {
  // const invertedColor = {
  //   background: "black",
  //   color: "white",
  // };
  const [course1, course2, course3] = items;
  return (
    // style={{ background: "black", color: "white" }}
    <>
      <Card title="강의 목록">
        <div className="courses">
          <CourseItem {...course1} />
          <CourseItem {...course2} />
          <CourseItem {...course3} />
        </div>
      </Card>
    </>
  );
}
