import React from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Air } from '../../components/air';
import { Layout } from '../layout';

const assets = [
  {
    id: 1,
    name: 'Apple',
    categoryName: 'Stock',
    subCategoryName: 'US-Stock',
    amount: 10,
    accountName: 'KB',
    price: 200,
    currencyType: 'USD',
    askAvg: 130,
    perform: 30,
    marketValue: 2000,
  },
  {
    id: 2,
    name: 'Facebook',
    categoryName: 'Stock',
    subCategoryName: 'US-Stock',
    amount: 3,
    accountName: 'KB',
    price: 304,
    currencyType: 'USD',
    askAvg: 500,
    perform: -50,
    marketValue: 608,
  },
];

const data = [
  {
    month: '3월',
    stock: 300,
    gold: 300,
    currency: 200,
  },
  {
    month: '4월',
    stock: 400,
    gold: 320,
    currency: 200,
  },
  {
    month: '5월',
    stock: 500,
    gold: 300,
    currency: 200,
  },
];

const data2 = [
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 300 },
];

const data3 = [
  {
    name: '3월',
    account1: 300,
    account2: 400,
    account3: 200,
  },
  {
    name: '4월',
    account1: 300,
    account2: 400,
    account3: 200,
  },
  {
    name: '5월',
    account1: 300,
    account2: 400,
    account3: 200,
  },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const SummaryValues = () => {
  return (
    <Layout title="MonthlyAllocation">
      <div className="bg-blue-50 h-full">
        <div id="upper" className="h-16">
          <div className="flex flex-row h-full">
            <div className="w-1/2 bg-gray-600 text-center">
              <select className="h-full w-full border text-xl">
                <option>2023년 5월</option>
              </select>
            </div>
            <div className="w-1/2 flex flex-col">
              <div className="h-1/2">
                <select className="h-full w-full border py-0 px-1">
                  <option>주식</option>
                </select>
              </div>
              <div className="h-1/2">
                <select className="h-full w-full border py-0 px-1">
                  <option>해외주식</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <Air />
        <div id="mainContent" className="flex flex-col space-y-3 p-3">
          <div className="bg-gray-200">
            <div className="flex flex-row justify-between h-6">
              <div>자산 현황</div>
              <div></div>
            </div>
            <div className="overflow-x-auto">
              <table className="table w-full bg-white text-left border">
                <thead>
                  <tr>
                    <th className="border-r">Name</th>
                    <th className="border-r">Account</th>
                    <th className="border-r">Category</th>
                    <th className="border-r">Currency</th>
                    <th className="border-r">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {assets.map((asset) => (
                    <tr
                      className="hover:bg-gray-100 cursor-pointer"
                      key={asset.id}
                    >
                      <td className="border-t border-r">{asset.name}</td>
                      <td className="border-t border-r">{asset.accountName}</td>
                      <td className="border-t border-r">
                        {asset.categoryName}
                      </td>
                      <td className="border-t border-r">
                        {asset.currencyType}
                      </td>
                      <td className="border-t border-r text-right">
                        {asset.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-gray-200">
            <div className="flex flex-row justify-between h-6">
              <div>자산 현황</div>
              <div></div>
            </div>
            <div>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart
                  margin={{
                    top: 20,
                    right: 30,
                    left: 10,
                    bottom: 20,
                  }}
                >
                  <Tooltip />
                  <Legend />
                  <Pie
                    data={data2}
                    labelLine={false}
                    label
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data2.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-gray-200">
            <div className="flex flex-row justify-between h-6">
              <div>월별 변화량</div>
              <div></div>
            </div>
            <div>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart
                  className=""
                  data={data}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 10,
                    bottom: 20,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="stock"
                    stackId="a"
                    fill="#8884d8"
                  />
                  <Area
                    type="monotone"
                    dataKey="gold"
                    stackId="a"
                    fill="#82ca9d"
                  />
                  <Area
                    type="monotone"
                    dataKey="currency"
                    stackId="a"
                    fill="#F361DC"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-gray-200">
            <div className="flex flex-row justify-between h-6">
              <div>계좌별 월별 비중</div>
              <div></div>
            </div>
            <div>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  width={500}
                  height={300}
                  data={data3}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="account1" stackId="a" fill="#8884d8" />
                  <Bar dataKey="account2" stackId="a" fill="#82ca9d" />
                  <Bar dataKey="account3" stackId="a" fill="#1DDB16" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
