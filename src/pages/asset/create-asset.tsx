import React, { useEffect, useState } from "react";
import { IPageNotice, ITestAccount } from "../../common.interface";
import { Layout } from "../layout";
import { PageNotice } from "../../components/page-notice";
import { Link, useHistory, useLocation } from "react-router-dom";

export const CreateAsset = () => {
  const history = useHistory();
  const [pageNotice, setPageNotice] = useState<IPageNotice | undefined>();

  const onSubmit = () => {
    history.push("/assets");
  };

  return (
    <Layout title="Create Asset">
      <PageNotice {...pageNotice} />
      <div className="bg-blue-50 h-full">
        <div id="mainContent" className="">
          <div className="flex flex-row justify-between h-6">
            <div></div>
            <div></div>
          </div>
          <div className="flex flex-row">
            <div className="w-5"></div>
            <div className="w-full flex flex-col space-y-2">
              <div>
                <div>Name</div>
                <div>
                  <input className="border w-full" />
                </div>
              </div>
              <div>
                <div>Account</div>
                <div>
                  <select className="border w-full h-7">
                    <option>- Select -</option>
                  </select>
                </div>
              </div>
              <div>
                <div>Category</div>
                <div>
                  <select className="border w-full h-7">
                    <option>- Select -</option>
                  </select>
                </div>
              </div>
              <div>
                <div>Sub Category</div>
                <div>
                  <select className="border w-full h-7">
                    <option>- Select -</option>
                  </select>
                </div>
              </div>
              <div>
                <div>Currency Type</div>
                <div>
                  <select className="border w-full h-7">
                    <option>- Select -</option>
                  </select>
                </div>
              </div>
              <div>
                <div>Amount</div>
                <div>
                  <input type="number" className="border w-full" />
                </div>
              </div>
            </div>
            <div className="w-5"></div>
          </div>
        </div>
        <div className="flex flex-row justify-between py-3">
          <div></div>
          <div className="flex flex-row">
            <div className="button" onClick={onSubmit}>
              Create
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </Layout>
  );
};
