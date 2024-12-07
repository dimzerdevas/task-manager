import { usePageTitle } from '../hooks';

export const PageTitleWrapper = ({
  children,
  title,
}: {
  children: JSX.Element;
  title: string;
}): JSX.Element => {
  usePageTitle(title);
  return <>{children}</>;
};
