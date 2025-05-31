import ClientForm from "../components/form/ClientForm";
import BreadCrumb from "../components/ui/breadCrumb";
import Table, { type Column } from "../components/ui/table";
import { useGetClientQuery, useDeleteClientMutation } from "../services/endpoints/tasker";
import type { Client } from "../types/types";
import { showSuccess, showError } from '../components/ui/toast';

function Clients() {
  const {
    data: typeServices,
    isLoading: isLoadingTypeService,
    refetch
  } = useGetClientQuery({});
  const data = typeServices || [];
  const [deleteClient, { isLoading: isLoadingDelete, isError, isSuccess }] = useDeleteClientMutation();

  const serviceColumns: Column<Client>[] = [
    { header: "Identificador", accessor: "id" },
    { header: "Nome", accessor: "name" },
    { header: "E-mail", accessor: "email" },
    { header: "Telefone", accessor: "phone" },
    {
      header: "Extra", accessor: "extra", render: (value, rowData: Client) => (
        <div className="flex gap-2">
          <button
            className="btn btn-error btn-sm"
            onClick={() => handleDelete(rowData.id)}
            disabled={isLoadingDelete}
          >
            Excluir
          </button>
        </div>
      )
    }
  ];

  const handleDelete = async (id: number) => {
    try {
      const response = await deleteClient(id);
      console.log(response);
      if (!response.error) {
        showSuccess("Cliente excluído com sucesso!");
        await refetch();
      } else {
        showError(response?.error?.data?.message);
      }
    } catch (error) {
      console.error("Erro ao excluir cliente:", error);
      showError("Não foi possível excluir o cliente. Tente novamente.");
    }
  };

  return (
    <>
   
      <h1 className="text-primary text-center text-4xl py-6">Cadastrar Cliente</h1>
      <div className="flex justify-end w-full mb-4 pr-4">

        <ClientForm
          afterPost={refetch} />

      </div>
      <Table<Client>
        columns={serviceColumns}
        data={data}
        isLoading={isLoadingTypeService}

      />
    </>
  );
}

export default Clients;
