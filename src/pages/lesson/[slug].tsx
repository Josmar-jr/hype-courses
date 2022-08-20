import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";
// import { useRouter } from "next/router";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import {
  GetLessonBySlugDocument,
  GetLessonsDocument,
  useGetLessonBySlugQuery,
} from "../../generated/graphql";
import { client, ssrCache } from "../../lib/urql";
// import { Sidebar } from "../../components/Sidebar";
// import {
//   GetLessonBySlugDocument,
//   useGetLessonBySlugQuery,
// } from "../../generated/graphql";
// import { client, ssrCache } from "../../lib/urql";

const Video = dynamic(() => import("../../components/Video"), {
  ssr: false,
});

interface LessonProps {
  slug: string;
}

const Lesson: NextPage<LessonProps> = ({ slug }) => {
  const [{ data }] = useGetLessonBySlugQuery({
    variables: {
      slug,
    },
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <Video lessonData={data} />

        <Sidebar />
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  client.query(GetLessonBySlugDocument, { slug: params }).toPromise;
  client.query(GetLessonsDocument).toPromise;

  return {
    props: {
      urqlState: ssrCache.extractData(),
      slug: params?.slug,
    },
    revalidate: 1,
  };
};

export default Lesson;
