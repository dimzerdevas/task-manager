import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TaskProvider } from "../context";
import { ThemeProvider } from "../context/ThemeContext";
import { SnackbarProvider } from "notistack";

export const Providers = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SnackbarProvider>
          <TaskProvider>{children}</TaskProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
