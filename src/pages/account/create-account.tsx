import React, { useEffect, useState } from "react";
import { IPageNotice, ITestAccount } from "../../common.interface";
import { Layout } from "../layout";
import { PageNotice } from "../../components/page-notice";
import { Link, useHistory, useLocation } from "react-router-dom";

export const CreateAccount = () => {
  const history = useHistory();
  const [pageNotice, setPageNotice] = useState<IPageNotice | undefined>();

  const onSubmit = () => {
    history.push("/accounts");
  };

  return (
    <Layout title="Create Account">
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
                <div>Account Number</div>
                <div>
                  <input className="border w-full" />
                </div>
              </div>
              <div>
                <div>Rate</div>
                <div>
                  <input className="border w-full" />
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
