export type TypeService = {
  id: number;
  title: string;
  description: string;
  hourRate: number;
  createdAt: string;
  updatedAt: string;
};

export type Client = {
    id: number;
    name: string,
    email: string,
    phone: string,
    extra: string
  }

export type Service = {
  id: number;
  type_serv_id: number;
  client_id: number;
  description: string;
  qtn_min: number;
  client: Client;
  typeService: TypeService;
};

