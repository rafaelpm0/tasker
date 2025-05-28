import BreadCrumb from "../components/ui/breadCrumb";
import Table, {type Column} from "../components/ui/table";
import { useGetClientQuery, useDeleteTypeServiceMutation } from "../services/endpoints/tasker";
import type { Client } from "../types/types";



function Clients() {
  const {
    data: typeServices,
    isLoading: isLoadingTypeService,
    refetch
  } = useGetClientQuery({});
  const data = typeServices || [];
  const [deleteTypeService, { isLoading: isLoadingDelete, isError, isSuccess }] = useDeleteTypeServiceMutation();
  
  const serviceColumns: Column<Client>[] = [
    { header: "Título", accessor: "name" },
    { header: "E-mail", accessor: "email" },
    { header: "Telefone", accessor: "phone" },
    { header: "Extra", accessor: "extra", render: (value, rowData: Client) => (
        <div className="flex gap-2">
          <button
            className="btn btn-error btn-sm"
            onClick={() => handleDelete(rowData.id)}
            disabled={isLoadingDelete}
          >
            Excluir
          </button>
        </div>
      ) }
  ];

  const handleDelete = async (id: number) => {
    await deleteTypeService( id )
    await refetch();
  }

  return (
    <>
      <BreadCrumb />
      <h1 className="text-primary text-center text-4xl py-6">Cadastrar Cliente</h1>
      <Table<Client>
        columns={serviceColumns}
        data={data}
        isLoading={isLoadingTypeService}

      />
    </>
  );
}

export default Clients;
