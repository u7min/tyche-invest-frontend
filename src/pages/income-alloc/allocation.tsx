import { Layout } from '../layout';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IPageNotice, ITestAccount } from '../../common.interface';
import { PageNotice } from '../../components/page-notice';
import { Air } from '../../components/air';

export const Allocation = () => {
  const [accounts, setAccounts] = useState<ITestAccount[]>([]);
  const [income, setIncome] = useState(0);
  const [pageNotice, setPageNotice] = useState<IPageNotice | undefined>();

  useEffect(() => {
    setAccounts([
      {
        id: 1,
        name: 'KB',
        accountNumber: '1111-1111-11111',
        allocRate: 50,
      },
      {
        id: 2,
        name: 'KAKAO',
        accountNumber: '2222-1111-11111',
        allocRate: 50,
      },
    ]);
  }, []);

  const onChangeIncome = (e: any) => {
    e.preventDefault();
    setIncome(e.target.value);
  };

  const onSubmit = () => {
    setPageNotice({ message: '저장 되었습니다.' });
  };

  return (
    <Layout title="MonthlyAllocation">
      <PageNotice {...pageNotice} />
      <div className="bg-blue-50 h-full">
        <div id="upper" className="h-12">
          <div className="flex flex-row h-full">
            <div className="w-1/2 bg-gray-600 text-center">
              <select className="h-full w-full border">
                <option>2023년 5월</option>
              </select>
            </div>
            <div className="w-1/2">
              <div className="h-full">
                <input
                  className="w-full h-full pl-1"
                  type="number"
                  onChange={onChangeIncome}
                  value={income}
                  min={10000}
                  max={100000000}
                />
              </div>
            </div>
          </div>
        </div>
        <Air />
        <div id="mainContent" className="">
          <div className="flex flex-row justify-between h-6">
            <div></div>
            <Link to={'/accounts'}>
              <div className="button">Manage Account</div>
            </Link>
          </div>
          <div>
            <table className="table w-full bg-white text-left border">
              <thead>
                <tr>
                  <th className="border-r">Name</th>
                  <th className="border-r">Number</th>
                  <th className="border-r">Rate</th>
                  <th className="border-r">Amount</th>
                </tr>
              </thead>
              <tbody>
                {accounts.map((account) => (
                  <tr className="hover:bg-gray-100">
                    <td className="border-t border-r">{account.name}</td>
                    <td className="border-t border-r">
                      {account.accountNumber}
                    </td>
                    <td className="border-t border-r text-right">
                      {account.allocRate} %
                    </td>
                    <td className="border-t border-r text-right">
                      {(income * account.allocRate) / 100}
                    </td>
                  </tr>
                ))}
                <tr className="hover:bg-gray-100">
                  <td className="border-t border-r">Total</td>
                  <td className="border-t border-r">-</td>
                  <td className="border-t border-r text-right">100 %</td>
                  <td className="border-t border-r text-right">{income}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-row justify-between py-3">
            <div></div>
            <div className="flex flex-row">
              <div className="button" onClick={onSubmit}>
                Apply
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
