import { useGetLessonsQuery } from "../generated/graphql";
import { Lesson } from "./Lesson";

export function Sidebar() {
  const [{ data }] = useGetLessonsQuery();

  return (
    <aside className="w-[348px] bg-neutral-900 border-l border-l-zinc-700 p-6">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-zinc-700 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson?.slug || ""}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  );
}
