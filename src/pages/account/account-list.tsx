import { PageNotice } from "../../components/page-notice";
import { Link } from "react-router-dom";
import { Layout } from "../layout";
import { useEffect, useState } from "react";
import { IPageNotice, ITestAccount } from "../../common.interface";

export const AccountList = () => {
  const [accounts, setAccounts] = useState<ITestAccount[]>([]);
  const [pageNotice, setPageNotice] = useState<IPageNotice | undefined>();

  useEffect(() => {
    setAccounts([
      {
        id: 1,
        name: "KB",
        accountNumber: "1111-1111-11111",
        allocRate: 50,
      },
      {
        id: 2,
        name: "KAKAO",
        accountNumber: "2222-1111-11111",
        allocRate: 50,
      },
    ]);
  }, []);

  return (
    <Layout title="Accounts">
      <PageNotice {...pageNotice} />
      <div className="bg-blue-50 h-full">
        <div id="mainContent" className="">
          <div className="flex flex-row justify-between h-6">
            <div></div>
            <Link to={"/accounts/new"}>
              <div className="button">New Account</div>
            </Link>
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </Layout>
  );
};
