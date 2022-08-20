import Image from "next/image";

import "@vime/core/themes/default.css";

import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
  CircleNotch,
} from "phosphor-react";

import { GetLessonBySlugQuery } from "../generated/graphql";
import { useRouter } from "next/router";

interface VideoProps {
  lessonData?: GetLessonBySlugQuery;
}

export default function Video({ lessonData }: VideoProps) {
  const test = useRouter();
  console.log(test);
  const lesson = lessonData?.lesson;

  if (!lessonData || !lesson) {
    return (
      <div className="flex flex-1 justify-center items-center">
        <CircleNotch
          className="animate-spin text-zinc-400"
          size={32}
          weight="bold"
        />
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{lesson.title}</h1>
            <p className="text-gray-200 mt-4 block leading-relaxed">
              {lesson.description}
            </p>

            <div className="flex items-center gap-4 mt-6">
              {lesson.teacher?.avatarURL && (
                <Image
                  className="rounded-full border-2 border-blue-200"
                  src={lesson.teacher.avatarURL}
                  alt={`Teacher ${lesson.teacher?.name}`}
                  width={128}
                  height={128}
                  quality={100}
                />
              )}

              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  {lesson.teacher?.name}
                </strong>
                <span className="text-gray-200 text-sm block">
                  {lesson.teacher?.bio}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href=""
              className="p-4 text-sm bg-teal-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-teal-700 transition-colors"
            >
              <DiscordLogo size={24} />
              Comunidade no Discord
            </a>
            <a
              href=""
              className="p-4 text-sm border border-blue-300 text-blue-300 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-300 hover:text-gray-900 transition-colors"
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2">
          <a
            href=""
            className="bg-zinc-700 rounded overflow-hidden flex place-items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-teal-500 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o matérial complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
          <a
            href=""
            className="bg-zinc-700 rounded overflow-hidden flex place-items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-teal-500 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">Baixe o wallpaper</p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
