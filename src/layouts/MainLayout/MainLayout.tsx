import { DashboardLayout, Router, AppProvider as ToolpadProvider, type NavigationItem } from "@toolpad/core"
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Outlet, useNavigate } from "react-router";
import HomeIcon from '@mui/icons-material/Home';
import { useState, useMemo } from "react";

const NAVIGATION: NavigationItem[] = [
  {
    segment: '',
    title: 'Home',
    icon: <HomeIcon />,
  },
  {
    segment: 'task-manager',
    title: 'Task Manager',
    icon: <AssignmentIcon />,
  },
]

export const MainLayout = (): JSX.Element => {
  const [dashboardPathname, setDashboardPathname] = useState('/');
  const routeNavigate = useNavigate();

  const router = useMemo<Router>(() => ({
    pathname: dashboardPathname,
    searchParams: new URLSearchParams(),
    navigate: path => {
      setDashboardPathname(String(path));
      routeNavigate(path);
    }
  }), [dashboardPathname, routeNavigate])

  return (
    <ToolpadProvider
      navigation={NAVIGATION}
      router={router}
      branding={{
        title: 'Task Manager App'
      }}
    >
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </ToolpadProvider>
  )
}