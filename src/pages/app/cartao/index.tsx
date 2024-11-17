import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ScanQrCode, Settings } from "lucide-react";
import { SiMastercard } from "react-icons/si";
import { BiLogoVisa } from "react-icons/bi";
export function CartaoLayout() {
  const faturas = [
    {
      title: "Outubro",
      pago: true,
      fechada: true,
      valor: "868,26",
      valorMin: "136,71",
      data: "10/10",
    },
    {
      title: "Novembro",
      pago: false,
      fechada: true,
      valor: "3000,00",
      valorMin: "500,00",
      data: "10/11",
    },
    {
      title: "Dezembro",
      pago: false,
      fechada: false,
      valor: "5000,00",
      valorMin: "600,00",
      data: "10/12",
    },
  ];
  return (
    <div className=" flex gap-8 p-8 w-full">
      <Card className=" w-2/3">
        <CardHeader className="p-4">
          <CardTitle className=" text-xl">Consultar Cartões</CardTitle>
        </CardHeader>
        <CardContent className="p-2 flex flex-col items-center">
          <Separator />
          <div className=" flex flex-col mt-8 items-center gap-3">
            <span className=" text-sm">Limite utilizado</span>
            <h2 className=" text-3xl font-bold"> R$ 5.000,00</h2>
            <span className=" text-sm text-black/50">
              Limite total R$ 6.800,00
            </span>
            <Progress value={80} className="w-2/3" />

            <div className="flex gap-8">
              <span className=" text-xs text-green-600">
                Limite utilizado:R$ 5.000,00
              </span>
              <span className=" text-xs text-gray-500">
                Limite disponível: R$ 1.600,00
              </span>
            </div>

            <ScrollArea className="w-3/3">
              <div className="flex w-max space-x-4 p-4">
                {faturas.map((item, _i) => (
                  <div key={_i} className={` w-52 h-32 border rounded-md `}>
                    <div
                      className={` rounded-t-md  ${
                        item.fechada && item.pago && "bg-gray-100"
                      }
                      
                      ${item.fechada && !item.pago && "bg-orange-200"}
                      
                      ${!item.fechada && !item.pago && "bg-blue-200"}
                      `}
                    >
                      <div className="flex flex-col p-2">
                        <span className=" text-sm font-bold">
                          {item.title}
                          {"  "}
                          {item.fechada && item.pago && (
                            <span className=" text-xs border p-0.5 rounded-xl bg-gray-200 text-white">
                              PAGO
                            </span>
                          )}
                          {item.fechada && !item.pago && (
                            <span className=" text-xs border p-0.5 rounded-xl bg-orange-600 text-white">
                              Fechada
                            </span>
                          )}
                          {!item.fechada && !item.pago && (
                            <span className=" text-xs border p-0.5 rounded-xl bg-blue-600 text-white">
                              Aberta
                            </span>
                          )}
                        </span>
                        <span className="text-xl font-light">
                          R${item.valor}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col p-2">
                      <div className="flex justify-between">
                        <span className=" text-sm">Data de vencimento</span>
                        <span className=" font-bold text-xs">{item.data}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className=" text-sm">Pag. Mínimo</span>
                        <span className=" font-bold text-xs">
                          R$ {item.valorMin}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </CardContent>
      </Card>
      <Card className=" w-1/3">
        <CardHeader>
          <CardTitle>Consultar Cartões</CardTitle>
        </CardHeader>
        <CardContent className="flex mt-8 gap-2">
          <Card className=" w-1/2 flex flex-col justify-center bg-green-100">
            <div className="flex items-center p-3 justify-end">
              <Settings className=" w-4 h-4" />
            </div>
            <div className=" font-bold text-center">SrLinku</div>
            <div className=" flex justify-between px-8 mt-8">
              <span className=" text-xl"> *****3930</span>
              <SiMastercard className=" w-10 h-10" />
            </div>
          </Card>
          <Card className="w-1/2 bg-green-400">
            <div className=" flex justify-between p-3">
              <div className="flex items-center gap-1 text-sm">
                <ScanQrCode className=" w-4 h-4" />
                Virtual
              </div>
              <Settings className=" w-4 h-4" />
            </div>
            <div className=" font-bold text-center">SrLinku</div>

            <div className=" flex justify-between px-8 mt-8">
              <span className=" text-xl"> *****5090</span>
              <BiLogoVisa className=" w-10 h-10" />
            </div>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
