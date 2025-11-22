import { useEffect, useState } from 'react';
import { Plus, ArrowDown, ArrowUp, Settings } from 'lucide-react';
import type { InventoryTransaction, Product } from '../types';
import { transactionApi, productApi } from '../services/api';
import TransactionForm from './TransactionForm';

export default function TransactionList() {
  const [transactions, setTransactions] = useState<InventoryTransaction[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [transactionsData, productsData] = await Promise.all([
        transactionApi.getAll(),
        productApi.getAll(),
      ]);
      setTransactions(transactionsData);
      setProducts(productsData);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const handleFormClose = () => {
    setShowForm(false);
    loadData();
  };

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'IN':
        return <ArrowDown className="w-4 h-4 text-green-600" />;
      case 'OUT':
        return <ArrowUp className="w-4 h-4 text-red-600" />;
      case 'ADJUSTMENT':
        return <Settings className="w-4 h-4 text-blue-600" />;
      default:
        return null;
    }
  };

  const getTransactionColor = (type: string) => {
    switch (type) {
      case 'IN':
        return 'text-green-600';
      case 'OUT':
        return 'text-red-600';
      case 'ADJUSTMENT':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Inventory Transactions</h2>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          New Transaction
        </button>
      </div>

      {showForm && <TransactionForm products={products} onClose={handleFormClose} />}

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reference</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {new Date(transaction.transactionDate!).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center gap-2">
                      {getTransactionIcon(transaction.transactionType)}
                      <span className={`font-medium ${getTransactionColor(transaction.transactionType)}`}>
                        {transaction.transactionType}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {transaction.product?.name || 'N/A'}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`font-semibold ${getTransactionColor(transaction.transactionType)}`}>
                      {transaction.transactionType === 'OUT' ? '-' : '+'}
                      {Math.abs(transaction.quantity)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{transaction.referenceNumber || '-'}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{transaction.notes || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
