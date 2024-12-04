import { DashboardLayout, AppProvider as ToolpadProvider, type NavigationItem } from "@toolpad/core"
import { theme } from "../../theme"
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Outlet } from "react-router";
import HomeIcon from '@mui/icons-material/Home';

const navigation: NavigationItem[] = [
  {
    segment: '',
    title: 'Home',
    icon: <HomeIcon />,
    pattern: '/'
  },
  {
    segment: 'task-manager',
    title: 'Task Manager',
    icon: <AssignmentIcon />,
    pattern: '/task-manager'
  },
]

export const MainLayout = (): JSX.Element => {
  return (
    <ToolpadProvider
      navigation={navigation}
      branding={{
        title: 'Task Manager App'
      }}
      theme={theme}
    >
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </ToolpadProvider>
  )
}