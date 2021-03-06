import * as windowManager from '../windowManager';

export const onPreferencesClick = () => {
  const window = windowManager.getCurrentWindow();
  windowManager.sendNavigateTo(window, { path: '/settings' });
};
