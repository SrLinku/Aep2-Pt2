import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function ExtratoCard() {
  return (
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
          <TableCell>Salário</TableCell>
          <TableCell className=" text-green-600 font-bold">+ 1800,00</TableCell>
          <TableCell>15/11/2024</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Aluguel</TableCell>
          <TableCell className=" text-red-600 font-bold">- 500,00</TableCell>
          <TableCell>15/11/2024</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>ÁGUA</TableCell>
          <TableCell className=" text-red-600 font-bold">- 200,00</TableCell>
          <TableCell>16/11/2024</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>MERCADO</TableCell>
          <TableCell className=" text-red-600 font-bold">- 800,00</TableCell>
          <TableCell>17/11/2024</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
