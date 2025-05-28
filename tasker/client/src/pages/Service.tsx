import BreadCrumb from "../components/ui/breadCrumb";
import Table, {type Column} from "../components/ui/table";
import { useDeleteTypeServiceMutation, useGetServicesQuery } from "../services/endpoints/tasker";
import type { Service } from "../types/types";



function Services() {
  const {
    data: services,
    isLoading: isLoadingTypeService,
    refetch
  } = useGetServicesQuery({});
  const data = services?.map(service => ({
    ...service,
    'client_name': service.client?.name,
    'typeService_title': service.typeService?.title,
    'hourRate': service.typeService?.hourRate,
  })) || [];
  const [deleteTypeService, { isLoading: isLoadingDelete, isError, isSuccess }] = useDeleteTypeServiceMutation();
  
  const serviceColumns: Column<Service>[] = [
    { header: "Identificação", accessor: "id" },
    { header: "Tipo de serviço", accessor: "typeService_title" },
    { header: "Id Client", accessor: "type_serv_id" },
    { header: "Cliente", accessor: "client_name" },
    { header: "Descrição", accessor: "description" },
    { header: "Horas de execução", accessor: "qtn_min" },
    {
      header: "Custo por hora", accessor: "hourRate"
    },
    {
      header: "Valor Total:", accessor: "", render: (_lineData:any, rowData: Service) => {
        const total = rowData?.qtn_min * rowData?.hourRate;
        return <span className="text-primary font-bold">{total.toFixed(2)}</span>;
      }
    },
     
    {
      header: "Extra", render: (_lineData: any, rowData: Service) => (
        <div className="flex gap-2">
          <button
            className="btn btn-error btn-sm"
            onClick={() => console.log(rowData.id)}
            disabled={isLoadingDelete}
          >
            Excluir
          </button>
        </div>
      ),
      accessor: "id"
    }
    ]

  const handleDelete = async (id: number) => {
    await deleteTypeService( id )
    await refetch();
  }

  return (
    <>
      <BreadCrumb />
      <h1 className="text-primary text-center text-4xl my-6">Serviços agendados</h1>
      <Table<Service>
        columns={serviceColumns}
        data={data}
        isLoading={isLoadingTypeService}

      />
    </>
  );
}

export default Services;
