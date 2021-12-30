import { RootStore } from "../store";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllOrgs,
  SetLocallySelectedOrg,
} from "../Actions/OrganisationActions";
import IOrganisationData from "../Types/Organisation";

export default function useOrganisationPickerHook() {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const organisationState = useSelector((state: RootStore) => state.OrgReducer);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function getSelectedOption(organisation?: IOrganisationData) {
    dispatch(SetLocallySelectedOrg(organisation));
    handleClose();
  }

  useEffect(() => {
    dispatch(GetAllOrgs());
  }, []);

  return {
    handleClick,
    organisationState,
    anchorEl,
    open,
    handleClose,
    getSelectedOption,
  };
}
