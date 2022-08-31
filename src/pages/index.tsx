import { signIn } from "next-auth/react";

import { AiFillGithub, AiOutlineGoogle, AiFillCheckCircle } from "react-icons/ai";
import { IoShieldCheckmark } from "react-icons/io5";

import { withSSRAuth } from "../shared/withSSRAuth";

import { Button } from "../components/Form/Button";
import { Logo } from "../components/Logo";

function SignIn() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <main className="w-full flex flex-col-reverse items-center h-full justify-center gap-8 md:flex-row md:justify-between md:items-center p-4 max-w-6xl">
        <div className="md:w-1/2">
          <ul className="px-2 flex flex-col gap-8">
            <li className="flex gap-4">
              <div className="flex items-center justify-center">
                <AiFillCheckCircle size="22" className="fill-sky-500 -translate-y-[2px]" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-zinc-200">Assista aulas exclusivas</h3>
                <p className="text-sm text-zinc-400 block mt-1">Aulas com os contéudos mais novos no mundo da programação para sua evolução</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex items-center justify-center">
                <AiFillCheckCircle size="22" className="fill-sky-500 -translate-y-[2px]" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-zinc-200">Tire todas as dúvidas</h3>
                <p className="text-sm text-zinc-400 block mt-1">Damos total suporte aos alunos no canal do discord, por que sabemos que o apoio constate ajuda os alunos;</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex items-center justify-center">
                <AiFillCheckCircle size="22" className="fill-sky-500 -translate-y-[2px]" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-zinc-200">Assista aulas exclusivas</h3>
                <p className="text-sm text-zinc-400 block mt-1">Aulas com os contéudos mais novos no mundo da programação para sua evolução</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="-translate-y-6 flex max-w-md w-full mx-auto md:w-96 gap-8 flex-col justify-center text-center">
          <Logo cln="h-32 w-32 md:h-40 md:w-40 mx-auto block" />

          <h1 className="font-medium text-zinc-200 text-3xl block">Log in to HypeCourses</h1>

          <div className="gap-4 flex flex-col">
            <Button
              variant="ghost"
              customCls="bg-red-500 hover:bg-red-600 transition-colors focus:bg-red-600 focus:ring-red-600"
              onClick={() => signIn("google")}
            >
              <AiOutlineGoogle size="26" className="-translate-y-[2px]" />
              <span>Entrar com o Google</span>
            </Button>
            <Button
              type="submit"
              onClick={() => signIn("github")}
            >
              <AiFillGithub size="26" className="-translate-y-[2px]" />
              <span>Entrar com o Github</span>
            </Button>
          </div>

          <div className="border border-zinc-700" />

          <span className="flex gap-2 items-center justify-center">
            <IoShieldCheckmark className="fill-zinc-400" />
            <small className="text-zinc-400 text-sm">Dados totalmente protegidos</small>
          </span>
        </div>
      </main >
    </div >
  );
}

export const getServerSideProps = withSSRAuth(async ctx => {
  return {
    props: {}
  }
});

export default SignIn;
