import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaArrowCircleUp, FaArrowAltCircleDown } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { IoIosKey, IoIosKeypad } from "react-icons/io";
import { MdOutlineSettings, MdNewspaper } from "react-icons/md";

export function PixLayout() {
  return (
    <div className=" flex flex-col items-center space-y-4 mt-8">
      <h2 className=" text-2xl font-bold">PIX</h2>
      <div className="flex gap-5">
        <Button variant="outline">
          <FaArrowCircleUp />
          Pagar
        </Button>
        <Button variant="outline">
          <FaArrowAltCircleDown />
          Receber
        </Button>
      </div>

      <Card className=" w-2/3">
        <CardHeader>
          <CardTitle>Mais ações</CardTitle>
        </CardHeader>
        <CardContent className=" flex justify-center gap-8">
          <div className="flex flex-col items-center">
            <div className=" w-12 h-12 border bg-muted flex items-center justify-center rounded-md">
              <CiCreditCard1 className=" w-10 h-10  text-orange-600" />
            </div>

            <span className=" text-xs">Pagar Pix no crédito</span>
          </div>
          <div className="flex flex-col items-center">
            <div className=" w-12 h-12 border bg-muted flex items-center justify-center rounded-md">
              <IoIosKey className=" w-8 h-8  text-orange-600" />
            </div>

            <span className=" text-xs">Cadastrar chave pix</span>
          </div>
          <div className="flex flex-col items-center">
            <div className=" w-12 h-12 border bg-muted flex items-center justify-center rounded-md">
              <IoIosKeypad className=" w-8 h-8  text-orange-600" />
            </div>

            <span className=" text-xs">Minhas chavesx</span>
          </div>
          <div className="flex flex-col items-center">
            <div className=" w-12 h-12 border bg-muted flex items-center justify-center rounded-md">
              <MdOutlineSettings className=" w-8 h-8  text-orange-600" />
            </div>

            <span className=" text-xs">Meus limites</span>
          </div>
          <div className="flex flex-col items-center">
            <div className=" w-12 h-12 border bg-muted flex items-center justify-center rounded-md">
              <MdNewspaper className=" w-8 h-8  text-orange-600" />
            </div>

            <span className=" text-xs">Extrato e devoluções</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
