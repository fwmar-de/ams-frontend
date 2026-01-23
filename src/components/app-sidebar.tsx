'use client';

import * as React from 'react';
import { House } from 'lucide-react';
import { NavMenu } from '@/components/nav-menu';
import { NavUserLogin } from '@/components/nav-user-login';
import { NavHeader } from '@/components/nav-header';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';

const data = {
  user: {
    firstname: 'Max',
    lastname: 'Mustermann',
    email: 'max@msutermann.com',
  },
  items: [
    {
      name: 'Home',
      url: '',
      icon: House,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>
      <SidebarContent>
        <NavMenu items={data.items} />
      </SidebarContent>
      <SidebarFooter>
        <NavUserLogin user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
