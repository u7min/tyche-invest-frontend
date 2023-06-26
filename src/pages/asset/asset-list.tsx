import React, { useEffect, useState } from 'react';
import { IPageNotice, ITestAsset } from '../../common.interface';
import { Layout } from '../layout';
import { PageNotice } from '../../components/page-notice';
import { Link } from 'react-router-dom';

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
    <Layout title="Assets">
      <PageNotice {...pageNotice} />
      <div className="bg-blue-50 h-full">
        <div id="mainContent" className="">
          <div className="flex flex-row justify-between h-6">
            <div></div>
            <Link to={'/assets/new'}>
              <div className="button">New Assets</div>
            </Link>
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
                    <td className="border-t border-r">{asset.categoryName}</td>
                    <td className="border-t border-r">{asset.currencyType}</td>
                    <td className="border-t border-r text-right">
                      {asset.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};
