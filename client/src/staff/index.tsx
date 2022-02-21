import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import './staff.scss';

import Staff from '@miq/staffjs';
import { SharedDataCtx } from '@miq/contextjs';


export default function StaffLayout(props:any) {
  const ctx = React.useContext(SharedDataCtx);
  const site:any = ctx.site

  return (
    <Staff.Layout>
      <Staff.Sidebar
        header={site && <div className="text-md text-ellipsis">{site.name}</div>}
        footer={
          <>
            <Staff.AccountNavLink />
            <Staff.SettingsNavLink />
          </>
        }
      >
      </Staff.Sidebar>

      <Staff.Main>
        <Routes>
          <Route path="account/*" element={<Staff.AccountLayout />} />
          <Route path="settings/*" element={<Staff.SettingLayout />} />
        </Routes>
      </Staff.Main>

      {/* <Staff.MobileNav></Staff.MobileNav> */}
    </Staff.Layout>
  );
}
