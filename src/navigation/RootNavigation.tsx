import { CommonActions, createNavigationContainerRef, StackActions } from '@react-navigation/native';
import { ParamListBase } from '@react-navigation/routers';

// Create a type-safe reference for the navigation container
export const navigationRef = createNavigationContainerRef<ParamListBase>();

// Generic navigate function
export function navigate<RouteName extends keyof ParamListBase>(
  name: RouteName,
  params?: ParamListBase[RouteName]
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

// Replace function
export function replace<RouteName extends keyof ParamListBase>(
  name: RouteName,
  params?: ParamListBase[RouteName]
) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
}

// Reset function
export function reset<RouteName extends keyof ParamListBase>(
  name: RouteName,
  params?: ParamListBase[RouteName]
) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name, params }],
      })
    );
  }
}