import { useForm } from "react-hook-form";
import type { Service, TypeService } from "../../types/types";
import { useGetClientQuery, useGetTypeServiceQuery, usePostClientMutation } from "../../services/endpoints/tasker";
import Modal, {closeModal} from "../ui/modal";



function ServiceForm({ afterPost }: { afterPost?: () => void }) {
  const [postClient] = usePostClientMutation();
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Service>();

  const onSubmit = async (data: Service) => {
    const newData = {
      ...data
    };
    await postClient(newData);
    closeModal("modalClient")
    afterPost?.();
  };


  //select dos clientes
    const { data: clients } = useGetClientQuery({});
  //select dos tipos de serviço
    const { data: typeServices } = useGetTypeServiceQuery({});

    console.log("bla",clients, typeServices);

  return (
    <div>
      <Modal id={"modalClient"} buttonLabel={"Cadastrar"}>
        <h1>Cadastro de tipo de serviço</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control flex flex-col">
             <label className="label">
              <span className="label-text">Cliente:</span>
            </label>
            <select id="type_serv_id" className="select select-bordered w-full max-w-xs" {...register("type_serv_id", { required: true })}>
                {
                typeServices?.map((typeService: TypeService) => (
                  <option key={typeService.id} value={typeService.id}>
                    {`${typeService.id} - ${typeService.title}`}
                  </option>
                ))
                }
            </select>
            
            {errors.type_serv_id && (
              <span className="label-text-alt text-error">
                Selecionar um cliente é obrigatório
              </span>
            )} 


            {/* <label className="label">
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
            )} */}
        
            {/* <label className="label">
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
            )} */}
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

