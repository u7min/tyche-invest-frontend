import React, { useState } from 'react';
import { IPageNotice } from '../../common.interface';
import { PageNotice } from '../../components/page-notice';
import { useHistory } from 'react-router-dom';
import { PageRoot } from '../../components/page-root';
import { PageContainer } from '../../components/page-container';
import { MainContent } from '../../components/mainContent';
import { Panel } from '../../components/panel';
import { PanelHeader } from '../../components/panel-header';
import { PanelContent } from '../../components/panel-content';
import { PanelFooter } from '../../components/panel-footer';

export const CreateAsset = () => {
  const history = useHistory();
  const [pageNotice, setPageNotice] = useState<IPageNotice | undefined>();

  const onSubmit = () => {
    history.push('/assets');
  };

  return (
    <PageRoot title="Create Asset">
      <PageNotice {...pageNotice} />
      <PageContainer>
        <MainContent>
          <Panel>
            <PanelContent>
              <div className="w-full flex flex-col space-y-2 px-3 pt-3">
                <div>
                  <div>Name</div>
                  <div>
                    <input type="text" className="border w-full h-10 pl-1" />
                  </div>
                </div>
                <div>
                  <div>Account</div>
                  <div>
                    <select className="border w-full h-10">
                      <option>- Select -</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div>Category</div>
                  <div>
                    <select className="border w-full h-10">
                      <option>- Select -</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div>Sub Category</div>
                  <div>
                    <select className="border w-full h-10">
                      <option>- Select -</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div>Currency Type</div>
                  <div>
                    <select className="border w-full h-10">
                      <option>- Select -</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div>Amount</div>
                  <div>
                    <input type="number" className="border w-full h-10 pl-1" />
                  </div>
                </div>
              </div>
              <div className="w-5"></div>
            </PanelContent>
            <PanelFooter>
              <div></div>
              <div className="flex flex-row">
                <div className="button" onClick={onSubmit}>
                  Create
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
