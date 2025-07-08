import { useForm } from "react-hook-form";
import type { Service, Client, TypeService } from "../../types/types";
import {
  useGetClientQuery,
  useGetTypeServiceQuery,
  usePostServiceMutation,
} from "../../services/endpoints/tasker";
import Modal, { closeModal } from "../ui/modal";
import { showError, showSuccess } from "../ui/toast";


function ServiceForm({ afterPost }: { afterPost?: () => void }) {
  const [postService] = usePostServiceMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Service>();

  const onSubmit = async (data: Service) => {
    const newData = {
      ...data,
      type_serv_id: Number(data.type_serv_id),
      client_id: Number(data.client_id),
      qtn_min: Number(data.qtn_min),
    };

    const response = await postService(newData);

    if (response.error) {
      showError(
        "Erro ao cadastrar serviço: " +
          response.error.data?.message ||
          "Tente novamente mais tarde."
      );
    } else {
      showSuccess("Serviço cadastrado com sucesso!");
    }

    closeModal("modalService");
    afterPost?.();
  };

  //select dos clientes
  const { data: clients } = useGetClientQuery({});
  //select dos tipos de serviço
  const { data: typeServices } = useGetTypeServiceQuery({});

  return (
    <div>
      <Modal id={"modalService"} buttonLabel={"Cadastrar"}>
        <h1>Cadastro de tipo de serviço</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control flex flex-col">
            <label className="label" htmlFor="type_serv_id">
              <span className="label-text">Tipo de serviço:</span>
            </label>
            <select
              id="type_serv_id"
              className="select select-bordered w-full max-w-xs"
              {...register("type_serv_id", { required: true })}
              name="type_serv_id"
              >
            
              <option value="" disabled selected>
                Selecione um tipo de serviço
              </option>
              {typeServices?.map((typeService: TypeService) => (
                <option key={typeService.id} value={typeService.id}>
                  {`${typeService.id} - ${typeService.title}`}
                </option>
              ))}
            </select>

            {errors.type_serv_id && (
              <span className="label-text-alt text-error">
                Selecionar um tipo de serviço é obrigatório
              </span>
            )}

            <label className="label" htmlFor="client_id">
              <span className="label-text">Cliente:</span>
            </label>
            <select
              id="client_id"
              className="select select-bordered w-full max-w-xs"
              {...register("client_id", { required: true })}
            >
              <option value="" disabled selected>
                Selecione um cliente
              </option>
              {clients?.map((client: Client) => (
                <option key={client.id} value={client.id}>
                  {`${client.id} - ${client.name}`}
                </option>
              ))}
            </select>

            {errors.client_id && (
              <span className="label-text-alt text-error">
                Selecionar um cliente é obrigatório
              </span>
            )}

            <label className="label" htmlFor="description">
              <span className="label-text">Descrição:</span>
            </label>
            <input
              className="input input-bordered"
              id="description"
              name="description"
              placeholder="Escreva a descrição"
              type="text"
            />
            {errors.description && (
              <span className="label-text-alt text-error">
                Descrição é obrigatória
              </span>
            )}

            <label className="label" htmlFor="qtn_min">
              <span className="label-text">Quantidade de horas:</span>
            </label>
            <input
              className="input input-bordered"
              id="qtn_min"
              placeholder="Informe o numero de horas gastas"
              type="number"
              {...register("qtn_min", { required: true })}
            />
            {errors.qtn_min && (
              <span className="label-text-alt text-error">
                Valor Hora é obrigatório
              </span>
            )}
          </div>
          <button name="enviar" type="submit" className="btn btn-primary mt-4">
            Enviar
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default ServiceForm;
