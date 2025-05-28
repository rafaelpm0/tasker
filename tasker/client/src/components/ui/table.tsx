import type { TableProps } from "../../types/types";

  const Table = <T extends { id: number }>({
    columns,
    data,
    handleDelete,
    isLoading,
    loadingDelete,
  }: TableProps<T>) => {
    if (isLoading) {
      return <span className="loading loading-bars loading-xl"></span>;
    }
  
    return (
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              {columns.map((column, index) => (
                <th key={index}>{column.label}</th>
              ))}
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={row.id}>
                <th>{rowIndex + 1}</th>
                {columns.map((column, colIndex) => (
                  <td key={colIndex}>{String(row[column.accessor])}</td>
                ))}
                <td>
                  <button
                    className={`btn btn-soft btn-error ${
                      loadingDelete === row.id ? "loading" : ""
                    }`}
                    onClick={() => handleDelete(row.id)}
                    disabled={loadingDelete === row.id}
                  >
                    {loadingDelete === row.id ? "Excluindo..." : "Excluir"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table;