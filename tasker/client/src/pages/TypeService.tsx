import TypeForm from "../components/form/typeForm";
import BreadCrumb from "../components/ui/breadCrumb";
import Modal from "../components/ui/modal";
import Table, {type Column} from "../components/ui/table";
import { useGetTypeServiceQuery, useDeleteTypeServiceMutation } from "../services/endpoints/tasker";
import type { TypeService } from "../types/types";


function TypeService() {
  const {
    data: typeServices,
    isLoading: isLoadingTypeService,
    refetch
  } = useGetTypeServiceQuery({});
  const data = typeServices || [];
  const [deleteTypeService, { isLoading: isLoadingDelete, isError, isSuccess }] = useDeleteTypeServiceMutation();
  
  const serviceColumns: Column<TypeService>[] = [
    { header: "Identificador", accessor: "id" },
    { header: "Título", accessor: "title" },
    { header: "Descrição", accessor: "description" },
    { header: "Valor/Hora", accessor: "hourRate" },
    { header: "", accessor: "id", render: (value, rowData: TypeService) => (
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
      <h1 className="text-primary text-center text-4xl my-6">Cadastrar tipo de Serviço</h1>
      <div className="flex justify-end w-full mb-4 pr-4">
        <Modal id={"modalTypeService"} buttonLabel={"Cadastrar"}>
          <TypeForm/>
        </Modal>
      </div>
      <Table<TypeService>
        columns={serviceColumns}
        data={data}
        isLoading={isLoadingTypeService}

      />
    </>
  );
}

export default TypeService;
