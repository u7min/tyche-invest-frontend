import { PageNotice } from '../../components/page-notice';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IPageNotice, ITestAccount } from '../../common.interface';
import { PageRoot } from '../../components/page-root';
import { PageContainer } from '../../components/page-container';
import { MainContent } from '../../components/mainContent';
import { Panel } from '../../components/panel';
import { PanelHeader } from '../../components/panel-header';
import { PanelContent } from '../../components/panel-content';

export const AccountList = () => {
  const [accounts, setAccounts] = useState<ITestAccount[]>([]);
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

  return (
    <PageRoot title="Accounts">
      <PageNotice {...pageNotice} />
      <PageContainer>
        <MainContent>
          <Panel>
            <PanelHeader>
              <div></div>
              <div>
                <Link to={'/accounts/new'}>
                  <div className="button">New Account</div>
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
                  </tr>
                </thead>
                <tbody>
                  {accounts.map((account) => (
                    <tr className="hover:bg-gray-100 cursor-pointer">
                      <td className="border-t border-r">{account.name}</td>
                      <td className="border-t border-r">
                        {account.accountNumber}
                      </td>
                      <td className="border-t border-r text-right">
                        {account.allocRate} %
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </PanelContent>
          </Panel>
        </MainContent>
      </PageContainer>
    </PageRoot>
  );
};
