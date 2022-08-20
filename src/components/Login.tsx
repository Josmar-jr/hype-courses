import { useRouter } from "next/router";
import { CircleNotch } from "phosphor-react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCreateSubscriberMutation } from "../generated/graphql";

export function Login() {
  const router = useRouter()
  const { register, handleSubmit } = useForm();

  const [{ fetching, data, stale, error, extensions, operation }, createUser] =
    useCreateSubscriberMutation();

  const handleSubscribeUser: SubmitHandler<FieldValues> = ({ name, email }) => {
    (async () => {
      await createUser({
        email,
        name,
      });
    })();

    router.push("/lesson");
  };

  return (
    <div className="max-w-md w-full p-8 bg-zinc-800 border border-zinc-600 rounded">
      <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

      <form
        className="flex flex-col gap-2 w-full"
        onSubmit={handleSubmit(handleSubscribeUser)}
      >
        <input
          className="border rounded border-zinc-600 bg-zinc-900 px-5 h-14"
          type="text"
          placeholder="Seu nome completo"
          {...register("name")}
        />
        <input
          className="border rounded border-zinc-600 bg-zinc-900 px-5 h-14"
          type="email"
          placeholder="Seu E-mail"
          {...register("email")}
        />

        <button
          disabled={fetching}
          type="submit"
          className="relative font-bold uppercase text-sm rounded mt-4 py-4 bg-teal-500 hover:bg-teal-700 disabled:bg-opacity-50 transition-colors"
        >
          {fetching && (
            <CircleNotch
              className="animate-spin absolute left-20"
              size={20}
              weight="bold"
            />
          )}
          Garantir minha vaga
        </button>
      </form>
    </div>
  );
}
