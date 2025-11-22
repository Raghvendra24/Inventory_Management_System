import { useEffect, useState } from 'react';
import { Package, AlertTriangle, TrendingUp, Boxes } from 'lucide-react';
import type { Product } from '../types';
import { productApi } from '../services/api';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    lowStockCount: 0,
    totalValue: 0,
    totalQuantity: 0,
  });
  const [lowStockProducts, setLowStockProducts] = useState<Product[]>([]);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const [products, lowStock] = await Promise.all([
        productApi.getAll(),
        productApi.getLowStock(),
      ]);

      const totalValue = products.reduce(
        (sum, p) => sum + Number(p.unitPrice) * p.quantityInStock,
        0
      );
      const totalQuantity = products.reduce((sum, p) => sum + p.quantityInStock, 0);

      setStats({
        totalProducts: products.length,
        lowStockCount: lowStock.length,
        totalValue,
        totalQuantity,
      });
      setLowStockProducts(lowStock);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<Package className="w-8 h-8 text-blue-600" />}
          title="Total Products"
          value={stats.totalProducts.toString()}
          bgColor="bg-blue-50"
        />
        <StatCard
          icon={<Boxes className="w-8 h-8 text-green-600" />}
          title="Total Quantity"
          value={stats.totalQuantity.toLocaleString()}
          bgColor="bg-green-50"
        />
        <StatCard
          icon={<TrendingUp className="w-8 h-8 text-purple-600" />}
          title="Total Value"
          value={`$${stats.totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          bgColor="bg-purple-50"
        />
        <StatCard
          icon={<AlertTriangle className="w-8 h-8 text-orange-600" />}
          title="Low Stock Items"
          value={stats.lowStockCount.toString()}
          bgColor="bg-orange-50"
        />
      </div>

      {lowStockProducts.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
              Low Stock Alert
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">SKU</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Current Stock</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reorder Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {lowStockProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{product.sku}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{product.name}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="text-orange-600 font-semibold">{product.quantityInStock}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{product.reorderLevel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  bgColor: string;
}

function StatCard({ icon, title, value, bgColor }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`${bgColor} p-3 rounded-lg`}>{icon}</div>
      </div>
    </div>
  );
}
