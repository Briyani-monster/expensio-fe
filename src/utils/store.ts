import { IconName } from "../Components/core/typeCore";

export interface navigationProps {
  name: string;
  path?: string;
  key?: string;
  icon: IconName;
}

export interface AppState {
  isLoading: boolean;
  error: string | null;
  currency: string;
  navigation: { topNav: navigationProps[]; bottomNav: string[] };
  // Add other state properties here as needed
}
