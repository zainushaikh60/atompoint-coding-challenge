import { useState } from "react";
import {
  LogoutIcon,
  DotsVerticalIcon,
  MailIcon,
  PhoneIcon,
  UserIcon,
  BriefcaseIcon,
} from "../../icons";
import AppLogo from "./AppLogo";
import IconContainer from "../ui/IconContainer";

const AppHeader = ({
  fullName,
  email,
  company,
  phoneNumber,
  onSignOut,
  clearSecurityChecklistState,
}) => {
  const [showContextMenu, setShowContextMenu] = useState(false);

  return (
    <header className="flex space-y-2  md:space-y-0 items-center justify-between">
      <AppLogo />

      <div
        className="flex flex-col"
        onClick={() =>
          setShowContextMenu((showContextMenu) => !showContextMenu)
        }
      >
        <div className="relative flex items-center space-x-2 bg-primary items-center text-white p-2 rounded-full text-sm cursor-pointer">
          <IconContainer className="w-5">
            <DotsVerticalIcon />
          </IconContainer>

          {showContextMenu && (
            <div className="absolute w-48 top-[41px] right-0 bg-white flex flex-col border rounded-md overflow-hidden">
              <div className="flex space-x-2 text-black border-b p-3">
                <IconContainer className="w-5 h-5 text-gray-400">
                  <UserIcon />
                </IconContainer>
                <span>{fullName}</span>
              </div>

              <div className="flex space-x-2 text-black border-b p-3">
                <IconContainer className="w-5 h-5 text-gray-400">
                  <MailIcon />
                </IconContainer>
                <span>{email}</span>
              </div>

              <div className="flex space-x-2 text-black border-b p-3">
                <IconContainer className="w-5 h-5 text-gray-400">
                  <BriefcaseIcon />
                </IconContainer>
                <span>{company}</span>
              </div>

              <div className="flex space-x-2 text-black border-b p-3">
                <IconContainer className="w-5 h-5 text-gray-400">
                  <PhoneIcon />
                </IconContainer>
                <span>{phoneNumber}</span>
              </div>

              <div
                className="flex space-x-2 text-black border-b p-3"
                onClick={() => {
                  onSignOut();
                  clearSecurityChecklistState();
                }}
              >
                <IconContainer className="w-5 h-5 text-gray-400">
                  <LogoutIcon />
                </IconContainer>
                <span>Logout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
