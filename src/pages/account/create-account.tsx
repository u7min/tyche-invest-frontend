import React, { useState } from 'react';
import { IPageNotice } from '../../common.interface';
import { PageNotice } from '../../components/page-notice';
import { useHistory } from 'react-router-dom';
import { PageRoot } from '../../components/page-root';
import { PageContainer } from '../../components/page-container';
import { MainContent } from '../../components/mainContent';
import { Panel } from '../../components/panel';
import { PanelFooter } from '../../components/panel-footer';
import { PanelHeader } from '../../components/panel-header';
import { PanelContent } from '../../components/panel-content';

export const CreateAccount = () => {
  const history = useHistory();
  const [pageNotice, setPageNotice] = useState<IPageNotice | undefined>();

  const onSubmit = () => {
    history.push('/accounts');
  };

  return (
    <PageRoot title="Create Account">
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
                  <div>Account Number</div>
                  <div>
                    <input type="text" className="border w-full h-10 pl-1" />
                  </div>
                </div>
                <div>
                  <div>Rate</div>
                  <div>
                    <input type="number" className="border w-full h-10 pl-1" />
                  </div>
                </div>
              </div>
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
