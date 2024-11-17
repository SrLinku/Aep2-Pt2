import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DollarSign } from "lucide-react";
import { AreaChartLayout } from "./area-chart";

import { ExtratoCard } from "./extrato";

export function HomeLayout() {
  return (
    <div className=" w-full">
      <div className="flex gap-5 justify-center my-8">
        <Card className=" w-1/4">
          <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
            <CardTitle className=" text-xl">Saldo em Conta</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground"></DollarSign>
          </CardHeader>
          <CardContent className="space-y-1">
            <span className="text-xl font-bold tracking-tighter">
              R$ 300,00
            </span>
          </CardContent>
        </Card>
        <Card className=" w-1/4">
          <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
            <CardTitle className=" text-xl">Entradas</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground"></DollarSign>
          </CardHeader>
          <CardContent className="space-y-1">
            <span className="text-xl font-bold tracking-tighter text-green-600">
              + R$ 1800,00
            </span>
          </CardContent>
        </Card>
        <Card className=" w-1/4">
          <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
            <CardTitle className=" text-xl">Saídas</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground"></DollarSign>
          </CardHeader>
          <CardContent className="space-y-1">
            <span className="text-xl font-bold tracking-tighter text-red-600">
              - R$ 1500,00
            </span>
          </CardContent>
        </Card>
      </div>

      <div className=" flex gap-5 justify-center h-full px-8">
        <Card className="w-1/3">
          <CardHeader className=" border-b">
            <CardTitle className=" text-xl">Extrato</CardTitle>
          </CardHeader>
          <ScrollArea className="h-[300px]">
            <CardContent>
              <ExtratoCard />
            </CardContent>
          </ScrollArea>
        </Card>

        <AreaChartLayout />
      </div>
    </div>
  );
}
