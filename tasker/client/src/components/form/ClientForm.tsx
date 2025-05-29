import { useForm } from "react-hook-form";
import type { Client } from "../../types/types";
import { usePostClientMutation } from "../../services/endpoints/tasker";
import Modal, {closeModal} from "../ui/modal";



function ClientForm({ afterPost }: { afterPost?: () => void }) {
  const [postClient] = usePostClientMutation();
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Client>();

  const onSubmit = async (data: Client) => {
    const newData = {
      ...data
    };
    await postClient(newData);
    closeModal("modalClient")
    afterPost?.();
  };

  return (
    <div>
      <Modal id={"modalClient"} buttonLabel={"Cadastrar"}>
        <h1>Cadastro de tipo de serviço</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text">Título:</span>
            </label>
            <input
              type="text"
              placeholder="Escreva o titulo"
              className="input input-bordered"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="label-text-alt text-error">
                Nome é obrigatório
              </span>
            )}
            <label className="label">
              <span className="label-text">E-mail:</span>
            </label>
            <input
              type="email" // Alterado para type="email"
              placeholder="Digite seu e-mail"
              className="input input-bordered"
              {...register("email", { 
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "E-mail inválido"
                }
              })}
            />
            {errors.email && (
              <span className="label-text-alt text-error">
                {errors.email.type === 'required' 
                  ? 'E-mail é obrigatório' 
                  : 'E-mail inválido'}
              </span>
            )}
        
            <label className="label">
              <span className="label-text">Telefone:</span>
            </label>
            <input
              type="tel"
              placeholder="Digite seu telefone"
              className="input input-bordered"
              {...register("phone", { 
                required: true,
                pattern: {
                  value: /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/,
                  message: "Telefone inválido"
                }
              })}
            />
            {errors.phone && (
              <span className="label-text-alt text-error">
                {errors.phone.type === 'required' 
                  ? 'Telefone é obrigatório' 
                  : 'Formato inválido. Use (99) 99999-9999'}
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

export default ClientForm;
