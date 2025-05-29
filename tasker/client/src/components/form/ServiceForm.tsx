import { useForm } from "react-hook-form";
import type { Service, Client, TypeService } from "../../types/types";
import {
  useGetClientQuery,
  useGetTypeServiceQuery,
  usePostServiceMutation,
} from "../../services/endpoints/tasker";
import Modal, { closeModal } from "../ui/modal";

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
    await postService(newData);
    closeModal("modalClient");
    afterPost?.();
  };

  //select dos clientes
  const { data: clients } = useGetClientQuery({});
  //select dos tipos de serviço
  const { data: typeServices } = useGetTypeServiceQuery({});

  return (
    <div>
      <Modal id={"modalClient"} buttonLabel={"Cadastrar"}>
        <h1>Cadastro de tipo de serviço</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text">Tipo de serviço:</span>
            </label>
            <select
              id="type_serv_id"
              className="select select-bordered w-full max-w-xs"
              {...register("type_serv_id", { required: true })}
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

            <label className="label">
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

            <label className="label">
              <span className="label-text">Descrição:</span>
            </label>
            <input
              type="text"
              placeholder="Escreva a descrição"
              className="input input-bordered"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="label-text-alt text-error">
                Descrição é obrigatória
              </span>
            )}
              <label className="label">
              <span className="label-text">Quantidade de horas:</span>
            </label>
            <input
              type="number"
              placeholder="Informe o numero de horas gastas"
              className="input input-bordered"
              {...register("qtn_min", { required: true })}
            />
            {errors.qtn_min && (
              <span className="label-text-alt text-error">
                Valor Hora é obrigatório
              </span>
            )}
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Enviar
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default ServiceForm;
