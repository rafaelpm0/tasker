import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Services from '../Service';
import { api } from '../../services/api'; // Importe o slice do RTK Query

// Configure um mock do Redux store
const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer, // Adicione o reducer do RTK Query
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // Adicione o middleware do RTK Query
});

describe('Services Page', () => {
  it('should render the page correctly', () => {
    render(
      <Provider store={store}>
        <Services />
      </Provider>
    );

    const title = screen.getByText('Serviços agendados'); // Corrigido o texto do título
    expect(title).toBeInTheDocument();

  });
});