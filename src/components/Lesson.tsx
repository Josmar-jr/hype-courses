import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson({ title, availableAt, slug, type }: LessonProps) {
  const { query } = useRouter();

  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(
    availableAt,
    "EEEE' - 'd' de 'MMMM' - 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  const isActiveLesson = slug === query.slug;

  return (
    <Link href={`/lesson/${slug}`} as={`/lesson/${slug}`}>
      <a className="group">
        <span className="text-zinc-500">{availableDateFormatted}</span>

        <div
          className={classNames(
            "rounded border border-zinc-700 p-4 mt-2 group-hover:border-teal-300",
            {
              "bg-teal-500": isActiveLesson,
            }
          )}
        >
          <header className="flex items-center justify-between">
            {isLessonAvailable ? (
              <span
                className={classNames(
                  "text-sm font-medium flex items-center gap-2",
                  {
                    "text-white": isActiveLesson,
                    "text-blue-300": !isActiveLesson,
                  }
                )}
              >
                <CheckCircle size={20} />
                Conteúdo liberado
              </span>
            ) : (
              <span className="text-sm text-orange-300 font-medium flex items-center gap-2">
                <Lock size={20} />
                Em breve
              </span>
            )}
            <span
              className={classNames(
                "text-xs font-bold rounded py-[0.125rem] px-2 text-white border",
                {
                  "border-white": isActiveLesson,
                  "border-teal-500": !isActiveLesson,
                }
              )}
            >
              {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
            </span>
          </header>

          <strong
            className={classNames("block mt-2 ", {
              "text-white": isActiveLesson,
              "text-gray-200": !isActiveLesson,
            })}
          >
            {title}
          </strong>
        </div>
      </a>
    </Link>
  );
}
