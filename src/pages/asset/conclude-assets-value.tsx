import React, { useEffect, useState } from 'react';
import { IPageNotice, ITestAsset } from '../../common.interface';
import { PageNotice } from '../../components/page-notice';
import { Air } from '../../components/air';
import { Link } from 'react-router-dom';
import { PageRoot } from '../../components/page-root';
import { PageContainer } from '../../components/page-container';
import { TopDisplay } from '../../components/top-display';
import { MainContent } from '../../components/mainContent';
import { Panel } from '../../components/panel';
import { PanelHeader } from '../../components/panel-header';
import { PanelContent } from '../../components/panel-content';
import { PanelFooter } from '../../components/panel-footer';

interface IConcludeViewAttr extends ITestAsset {
  performColour?: string;
}

export const ConcludeAssetsValue = () => {
  const [assets, setAssets] = useState<IConcludeViewAttr[]>([]);
  const [pageNotice, setPageNotice] = useState<IPageNotice | undefined>();

  useEffect(() => {
    const testAsset = [
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
    setAssets(
      testAsset.map((asset) => {
        const perform = calculatePerform(asset.askAvg, asset.price);
        const performColour = getPerformColour(perform);
        return {
          ...asset,
          perform,
          performColour,
        };
      }),
    );
  }, []);

  const onSubmit = () => {
    setPageNotice({ message: '저장 되었습니다.' });
  };

  const changeAsset = (newAsset: IConcludeViewAttr) => {
    setAssets(assets.filter((a) => a.id !== newAsset.id).concat(newAsset));
  };

  const onChangeAmount = (e: any, asset: ITestAsset) => {
    e.preventDefault();
    const amount: number = e.target.value;
    changeAsset({ ...asset, amount });
  };

  const onChangeAskAvg = (e: any, asset: IConcludeViewAttr) => {
    e.preventDefault();
    const askAvg: number = e.target.value;
    const perform = calculatePerform(askAvg, asset.price);
    const performColour = getPerformColour(perform);
    changeAsset({ ...asset, askAvg, perform, performColour });
  };

  const onChangePrice = (e: any, asset: IConcludeViewAttr) => {
    e.preventDefault();
    const price: number = e.target.value;
    const perform = calculatePerform(asset.askAvg, price);
    const performColour = getPerformColour(perform);
    changeAsset({ ...asset, price, perform, performColour });
  };

  const calculateMarketValue = (asset: IConcludeViewAttr) => {
    return asset.price * asset.amount;
  };

  const calculatePerform = (askAvg: number, price: number) => {
    return askAvg < 1 ? 0 : (price / askAvg) * 100 - 100;
  };

  const getPerformColour = (val: number) => {
    return val > 0 ? 'text-blue-600' : val < 0 ? 'text-red-500' : 'text-black';
  };

  return (
    <PageRoot title="Conclude Assets Value">
      <PageNotice {...pageNotice} />
      <PageContainer>
        <TopDisplay>
          <div className="flex flex-row h-full">
            <div className="w-1/2 text-center border-r">
              <select className="h-full w-full border-0">
                <option>2023년 5월</option>
              </select>
            </div>
            <div className="w-1/2 divide-y">
              <div>현재 환율</div>
              <div>전체 자산</div>
            </div>
          </div>
        </TopDisplay>
        <MainContent>
          <Panel>
            <PanelHeader>
              <div></div>
              <div>
                <Link to={'/assets'}>
                  <div className="button">Manage Assets</div>
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
                    <th className="border-r">Price</th>
                    <th className="border-r">Amount</th>
                    <th className="border-r">Market Value</th>
                    <th className="border-r">Ask Avg</th>
                    <th className="border-r">Perform</th>
                  </tr>
                </thead>
                <tbody>
                  {assets
                    .sort((a, b) => a.id - b.id)
                    .map((asset) => (
                      <tr className="hover:bg-gray-100" key={asset.id}>
                        <td className="border-t border-r">{asset.name}</td>
                        <td className="border-t border-r">
                          {asset.accountName}
                        </td>
                        <td className="border-t border-r">
                          {asset.categoryName}
                        </td>
                        <td className="border-t border-r">
                          {asset.currencyType}
                        </td>
                        <td className="border-t border-r text-right">
                          <input
                            type="number"
                            value={asset.price}
                            size={5}
                            min={0}
                            className="w-full pl-1 ring"
                            onChange={(e) => onChangePrice(e, asset)}
                          />
                        </td>
                        <td className="border-t border-r text-right">
                          <input
                            type="number"
                            value={asset.amount}
                            size={5}
                            min={0}
                            className="w-full pl-1 ring"
                            onChange={(e) => onChangeAmount(e, asset)}
                          />
                        </td>
                        <td className="border-t border-r text-right bg-red-100">
                          {calculateMarketValue(asset).toFixed(0)}
                        </td>
                        <td className="border-t border-r text-right">
                          <input
                            type="number"
                            value={asset.askAvg}
                            size={5}
                            min={0}
                            className="w-full pl-1 ring"
                            onChange={(e) => onChangeAskAvg(e, asset)}
                          />
                        </td>
                        <td
                          className={`border-t border-r text-right ${asset.performColour}`}
                        >
                          {asset.perform.toFixed(2)}%
                        </td>
                      </tr>
                    ))}
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
