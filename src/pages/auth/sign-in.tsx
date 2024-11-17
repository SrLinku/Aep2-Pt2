import { z } from "zod";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const signInForm = z.object({
  email: z.string().email(),
  password: z.string(),
});
type SignInForm = z.infer<typeof signInForm>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>();

  const history = useNavigate();
  async function handSignIn(data: SignInForm) {
    try {
      if (data.email != "teste@teste.com" || data.password != "123456")
        throw "erro";

      history("/");
    } catch {
      toast.error("Credenciais inválidas!");
    }
  }

  return (
    <div className="flex flex-col gap-5 items-center border p-5 rounded-lg bg-white">
      <h1 className=" text-2xl text-center ">Acesse sua conta</h1>

      <div className=" flex flex-col  md:w-[450px] gap-5 ">
        <form className="space-y-4" onSubmit={handleSubmit(handSignIn)}>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="email@email.com"
              className=" dark:bg-white"
              {...register("email")}
            />

            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="*******"
              className=" dark:bg-white"
              {...register("password")}
            />
          </div>

          <Button
            disabled={isSubmitting}
            className="w-full bg-primary"
            type="submit"
          >
            Acessar
          </Button>
        </form>
      </div>
    </div>
  );
}
