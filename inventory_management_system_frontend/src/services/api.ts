import type { Category, Supplier, Product, InventoryTransaction } from '../types';

const API_BASE_URL = 'http://localhost:8080/api';

export const categoryApi = {
  getAll: async (): Promise<Category[]> => {
    const response = await fetch(`${API_BASE_URL}/categories`);
    return response.json();
  },
  create: async (category: Category): Promise<Category> => {
    const response = await fetch(`${API_BASE_URL}/categories`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(category),
    });
    return response.json();
  },
  update: async (id: string, category: Category): Promise<Category> => {
    const response = await fetch(`${API_BASE_URL}/categories/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(category),
    });
    return response.json();
  },
  delete: async (id: string): Promise<void> => {
    await fetch(`${API_BASE_URL}/categories/${id}`, { method: 'DELETE' });
  },
};

export const supplierApi = {
  getAll: async (): Promise<Supplier[]> => {
    const response = await fetch(`${API_BASE_URL}/suppliers`);
    return response.json();
  },
  create: async (supplier: Supplier): Promise<Supplier> => {
    const response = await fetch(`${API_BASE_URL}/suppliers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(supplier),
    });
    return response.json();
  },
  update: async (id: string, supplier: Supplier): Promise<Supplier> => {
    const response = await fetch(`${API_BASE_URL}/suppliers/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(supplier),
    });
    return response.json();
  },
  delete: async (id: string): Promise<void> => {
    await fetch(`${API_BASE_URL}/suppliers/${id}`, { method: 'DELETE' });
  },
};

export const productApi = {
  getAll: async (): Promise<Product[]> => {
    const response = await fetch(`${API_BASE_URL}/products`);
    return response.json();
  },
  getById: async (id: string): Promise<Product> => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    return response.json();
  },
  getLowStock: async (): Promise<Product[]> => {
    const response = await fetch(`${API_BASE_URL}/products/low-stock`);
    return response.json();
  },
  create: async (product: Product): Promise<Product> => {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    return response.json();
  },
  update: async (id: string, product: Product): Promise<Product> => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    return response.json();
  },
  delete: async (id: string): Promise<void> => {
    await fetch(`${API_BASE_URL}/products/${id}`, { method: 'DELETE' });
  },
};

export const transactionApi = {
  getAll: async (): Promise<InventoryTransaction[]> => {
    const response = await fetch(`${API_BASE_URL}/transactions`);
    return response.json();
  },
  getByProduct: async (productId: string): Promise<InventoryTransaction[]> => {
    const response = await fetch(`${API_BASE_URL}/transactions/product/${productId}`);
    return response.json();
  },
  create: async (transaction: InventoryTransaction): Promise<InventoryTransaction> => {
    const response = await fetch(`${API_BASE_URL}/transactions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(transaction),
    });
    return response.json();
  },
};
