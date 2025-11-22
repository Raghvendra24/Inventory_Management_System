export interface Category {
  id?: string;
  name: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Supplier {
  id?: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Product {
  id?: string;
  sku: string;
  companyName: string;
  description: string;
  category?: Category;
  supplier?: Supplier;
  unitPrice: number;
  quantityInStock: number;
  reorderLevel: number;
  reorderQuantity: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface InventoryTransaction {
  id?: string;
  product: Product;
  transactionType: 'IN' | 'OUT' | 'ADJUSTMENT';
  quantity: number;
  referenceNumber: string;
  notes: string;
  transactionDate?: string;
  createdAt?: string;
}
