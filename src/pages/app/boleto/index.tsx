import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function BoletoLayout() {
  return (
    <div className=" flex flex-col gap-8 p-8 w-full h-full items-center">
      <Card className="w-2/3 h-1/4">
        <CardHeader>
          <CardTitle>Pagamento</CardTitle>
        </CardHeader>
        <CardContent>
          <Input placeholder="Digite o código de barras" />
        </CardContent>
        <CardFooter className="justify-end">
          <Button className=" bg-primary">Continuar</Button>
        </CardFooter>
      </Card>

      <Card className=" w-2/3">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px]">Nome</TableHead>
              <TableHead className="w-[140px]">Valor</TableHead>
              <TableHead className="w-[140px]">Data</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Boleto Pago UNIMED</TableCell>
              <TableCell className=" text-red-600 font-bold">
                - 500,00
              </TableCell>
              <TableCell>15/11/2024</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Boleto Pago Internet</TableCell>
              <TableCell className=" text-red-600 font-bold">
                - 200,00
              </TableCell>
              <TableCell>16/11/2024</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Boleto Pago 02/10 Empréstimo</TableCell>
              <TableCell className=" text-red-600 font-bold">
                - 800,00
              </TableCell>
              <TableCell>17/11/2024</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
