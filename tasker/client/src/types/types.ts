export interface Column<T> {
    label: string;           // Nome visível da coluna
    accessor: keyof T;       // Chave que será acessada no tipo T
  }
  
export  interface TableProps<T extends { id: number }> {
    columns: Column<T>[];    // Array de colunas fortemente tipado
    data: T[];
    handleDelete: (id: number) => void;
    isLoading: boolean;
    loadingDelete: number | null;
  }
  
export type Service = {
    id: number;
    title: string;
    description: string;
    hourRate: number;
  };
    