import { useForm } from "react-hook-form";
import type { TypeService } from "../../types/types";
import { usePostTypeClientMutation } from "../../services/endpoints/tasker";

function TypeForm() {
 
    const[ postTypeClient ] = usePostTypeClientMutation();
 
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeService>();
  const onSubmit = (data: TypeService) => {
    postTypeClient({data})
  };
  return (
    <div>
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
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span className="label-text-alt text-error">
              Título é obrigatório
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
            <span className="label-text">Valor Hora:</span>
          </label>
          <input
            type="number"
            placeholder="Informe a valor hora"
            className="input input-bordered"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span className="label-text-alt text-error">
                Valor Hora é obrigatório
            </span>
          )}
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Enviar
        </button>
      </form>

    </div>
  );
}

export default TypeForm;
