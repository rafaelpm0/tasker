import BreadCrumb from "../components/ui/breadCrumb";
import Table from "../components/ui/table";
import { useGetTypeServiceQuery, useDeleteTypeServiceMutation } from "../services/endpoints/tasker";
import type { Column, Service } from "../types/types";

function TypeService() {
  const {
    data: typeServices,
    isLoading: isLoadingTypeService,
    refetch
  } = useGetTypeServiceQuery({});

  const [deleteTypeService, { isLoading: isLoadingDelete, isError, isSuccess }] = useDeleteTypeServiceMutation();
  
  const serviceColumns: Column<Service>[] = [
    { label: "Título", accessor: "title" },
    { label: "Descrição", accessor: "description" },
    { label: "Valor/Hora", accessor: "hourRate" },
  ];

  const handleDelete = async (id: number) => {
    await deleteTypeService( id )
    await refetch();
  }

  return (
    <main className="w-full bg-base-300">
      <BreadCrumb />
      <h1 className="text-primary mt-6">Cadastrar tipo de Serviço</h1>
      <Table
        columns={serviceColumns}
        data={typeServices}
        handleDelete={handleDelete}
        isLoading={isLoadingTypeService}
        loadingDelete={null}
      />
    </main>
  );
}

export default TypeService;
