import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ServiceForm from '../serviceForm';
import { api } from '../../../services/api';
import { vi } from 'vitest'; // Import vitest para mocking

// Mock para dialog showModal e close (JSDOM não suporta nativamente)
Object.defineProperty(HTMLDialogElement.prototype, 'showModal', {
  value: vi.fn(),
  writable: true,
});

Object.defineProperty(HTMLDialogElement.prototype, 'close', {
  value: vi.fn(),
  writable: true,
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

    // Clica no botão para abrir o modal
    const openModalButton = screen.getByText('Cadastrar');
    fireEvent.click(openModalButton);

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

    // Clica no botão para abrir o modal
    const openModalButton = screen.getByText('Cadastrar');
    fireEvent.click(openModalButton);

    // Encontra o botão de submit e clica nele para gerar os erros de validação
    const submitButton = screen.getByText('Enviar');
    fireEvent.click(submitButton);

    const typeServiceError = await screen.findByText('Selecionar um tipo de serviço é obrigatório');
    const clientError = await screen.findByText('Selecionar um cliente é obrigatório');
    const descriptionError = await screen.findByText('Descrição é obrigatória');
    const qtnMinError = await screen.findByText('Valor Hora é obrigatório');

    expect(typeServiceError).toBeInTheDocument();
    expect(clientError).toBeInTheDocument();
    expect(descriptionError).toBeInTheDocument();
    expect(qtnMinError).toBeInTheDocument();
  });

});