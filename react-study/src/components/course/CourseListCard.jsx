import CourseItem from "./CourseItem";
import Card from "../Card";
export default function CourseListCard({ title, items }) {
  return (
    <Card title={title}>
      <div className="courses">
        {items.map((item) => (
          <CourseItem key={item.id} {...item} />
        ))}
      </div>
    </Card>
  );
}
