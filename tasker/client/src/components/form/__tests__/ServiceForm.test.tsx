import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ServiceForm from '../serviceForm';
import { api } from '../../../services/api';
import { vi } from 'vitest'; // Import vitest para mocking
import { closeModal } from '../../ui/modal';

// Mock para o `closeModal`
vi.mock('../../ui/modal', async () => {
  const original = await vi.importActual('../../ui/modal'); // Importa o módulo original
  return {
    ...original,
    closeModal: vi.fn(), // Mock para a função `closeModal`
  };
});

// Configure um mock do Redux store
const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer, // Adicione o reducer do RTK Query
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // Adicione o middleware do RTK Query
});

// Dados simulados
const mockClients = [
  { id: 1, name: 'Cliente 1' },
  { id: 2, name: 'Cliente 2' },
];

const mockTypeServices = [
  { id: 1, title: 'Serviço 1' },
  { id: 2, title: 'Serviço 2' },
];

vi.mock('../../../services/endpoints/tasker', () => ({
  useGetClientQuery: () => ({ data: mockClients }),
  useGetTypeServiceQuery: () => ({ data: mockTypeServices }),
  usePostServiceMutation: () => [vi.fn()],
}));

describe('ServiceForm Component', () => {
  it('should render the form correctly', () => {
    render(
      <Provider store={store}>
        <ServiceForm afterPost={() => {}} />
      </Provider>
    );

    const typeServiceSelect = screen.getByLabelText('Tipo de serviço:');
    const clientSelect = screen.getByLabelText('Cliente:');
    const descriptionInput = screen.getByPlaceholderText('Escreva a descrição');
    const qtnMinInput = screen.getByPlaceholderText('Informe o numero de horas gastas');

    expect(typeServiceSelect).toBeInTheDocument();
    expect(clientSelect).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(qtnMinInput).toBeInTheDocument();
  });

  it('should show error messages for required fields', async () => {
    render(
      <Provider store={store}>
        <ServiceForm afterPost={() => {}} />
      </Provider>
    );


    const typeServiceError = await screen.findByText('Selecionar um tipo de serviço é obrigatório');
    const clientError = await screen.findByText('Selecionar um cliente é obrigatório');
    const descriptionError = await screen.findByText('Descrição é obrigatória');
    const qtnMinError = await screen.findByText('Valor Hora é obrigatório');

    expect(typeServiceError).toBeInTheDocument();
    expect(clientError).toBeInTheDocument();
    expect(descriptionError).toBeInTheDocument();
    expect(qtnMinError).toBeInTheDocument();
  });

  it('should call closeModal and afterPost on successful form submission', async () => {
    const afterPostMock = vi.fn();
    render(
      <Provider store={store}>
        <ServiceForm afterPost={afterPostMock} />
      </Provider>
    );

    const typeServiceSelect = screen.getByLabelText('Tipo de serviço:');
    const clientSelect = screen.getByLabelText('Cliente:');
    const descriptionInput = screen.getByPlaceholderText('Escreva a descrição');
    const qtnMinInput = screen.getByPlaceholderText('Informe o numero de horas gastas');

    // Preenche os campos
    fireEvent.change(typeServiceSelect, { target: { value: '1' } });
    fireEvent.change(clientSelect, { target: { value: '1' } });
    fireEvent.change(descriptionInput, { target: { value: 'Teste descrição' } });
    fireEvent.change(qtnMinInput, { target: { value: '2' } });


    // Verifica se `closeModal` e `afterPost` foram chamados
    expect(closeModal).toHaveBeenCalledWith('modalService');
    expect(afterPostMock).toHaveBeenCalled();
  });
});