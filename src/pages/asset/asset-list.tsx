import React, { useEffect, useState } from 'react';
import { IPageNotice, ITestAsset } from '../../common.interface';
import { PageNotice } from '../../components/page-notice';
import { Link } from 'react-router-dom';
import { PageRoot } from '../../components/page-root';
import { PageContainer } from '../../components/page-container';
import { MainContent } from '../../components/mainContent';
import { Panel } from '../../components/panel';
import { PanelHeader } from '../../components/panel-header';
import { PanelContent } from '../../components/panel-content';

export const AssetList = () => {
  const [assets, setAssets] = useState<ITestAsset[]>([]);
  const [pageNotice, setPageNotice] = useState<IPageNotice | undefined>();

  useEffect(() => {
    setAssets([
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
    ]);
  }, []);

  const onSubmit = () => {
    setPageNotice({ message: '저장 되었습니다.' });
  };

  return (
    <PageRoot title="Assets">
      <PageNotice {...pageNotice} />
      <PageContainer>
        <MainContent>
          <Panel>
            <PanelHeader>
              <div></div>
              <div>
                <Link to={'/assets/new'}>
                  <div className="button">New Assets</div>
                </Link>
              </div>
            </PanelHeader>
            <PanelContent>
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
            </PanelContent>
          </Panel>
        </MainContent>
      </PageContainer>
    </PageRoot>
  );
};
