import React, { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import {
  authListState,
  colorThemeState,
  homepageItemState,
  iconPackState,
  isHostModeState,
  loadingState,
  loginState,
  reloadDashboardDataState,
  sidebarItemState,
  userDataState
} from '../../atoms';
import ApiService from '../../utils/ApiService';
import makeToast from '../../utils/ToastUtils';

const PrivateRoute = () => {
  const navigate = useNavigate();

  const setLoading = useSetRecoilState(loadingState);

  const loginData = useRecoilValue(loginState);

  const setAuthListState = useSetRecoilState(authListState);
  const [reloadData, setReloadData] = useRecoilState(reloadDashboardDataState);
  const setUserData = useSetRecoilState(userDataState);
  const setSidebarItems = useSetRecoilState(sidebarItemState);
  const setHomepageItems = useSetRecoilState(homepageItemState);
  const setColorTheme = useSetRecoilState(colorThemeState);
  const setIconPacks = useSetRecoilState(iconPackState);
  const setHostMode = useSetRecoilState(isHostModeState);

  useEffect(() => {
    if (reloadData && loginData?.token) {
      setLoading(true);

      ApiService.get("/api/v1/dashboard", loginData ? loginData?.token : null, navigate)
        .then(data => {
          setAuthListState(data?.message?.authenticators);
          setUserData(data?.message?.userData);
          setSidebarItems(data?.message?.sidebarItems);
          setHomepageItems(data?.message?.homepageItems);
          setIconPacks(data?.message?.iconPacks);
          setHostMode(data?.message?.isHostMode);

          const theme = data?.message?.userData?.colorTheme;

          setColorTheme(theme);

          setReloadData(false); // Set reloadData back to false after data is fetched
        })
        .catch(error => {
          console.log(error);
          if (!error.handled) makeToast("error", "Error loading data...");
        })
        .finally(() => {
          setLoading(false);
          setReloadData(false);
        });
    }
  }, [loginData, reloadData, navigate, setLoading, setAuthListState, setUserData, setSidebarItems,
    setHomepageItems, setColorTheme, setReloadData, setIconPacks, setHostMode]);

  return loginData?.token ? <Outlet /> : <Navigate to="/login" />;
};


const MemoizedComponent = React.memo(PrivateRoute);
export default MemoizedComponent;