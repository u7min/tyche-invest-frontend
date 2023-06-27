import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IPageNotice, ITestAccount } from '../../common.interface';
import { PageNotice } from '../../components/page-notice';
import { PageRoot } from '../../components/page-root';
import { PageContainer } from '../../components/page-container';
import { TopDisplay } from '../../components/top-display';
import { MainContent } from '../../components/mainContent';
import { Panel } from '../../components/panel';
import { PanelHeader } from '../../components/panel-header';
import { PanelContent } from '../../components/panel-content';
import { PanelFooter } from '../../components/panel-footer';

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
    <PageRoot title="MonthlyAllocation">
      <PageNotice {...pageNotice} />
      <PageContainer>
        <TopDisplay>
          <div className="flex flex-row h-full">
            <div className="w-1/2 text-center border-r">
              <select className="h-full w-full text-xl border-0">
                <option>2023년 5월</option>
              </select>
            </div>
            <div className="w-1/2 h-12">
              <div className="h-full">
                <input
                  className="w-full h-full pl-1 border-0"
                  type="number"
                  onChange={onChangeIncome}
                  value={income}
                  min={10000}
                  max={100000000}
                />
              </div>
            </div>
          </div>
        </TopDisplay>
        <MainContent>
          <Panel>
            <PanelHeader>
              <div></div>
              <div>
                <Link to={'/accounts'}>
                  <div className="button">Manage Account</div>
                </Link>
              </div>
            </PanelHeader>
            <PanelContent>
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
            </PanelContent>
            <PanelFooter>
              <div></div>
              <div className="flex flex-row">
                <div className="button" onClick={onSubmit}>
                  Apply
                </div>
              </div>
              <div></div>
            </PanelFooter>
          </Panel>
        </MainContent>
      </PageContainer>
    </PageRoot>
  );
};
