import { Tabs } from "@mantine/core";
import { Login } from "../Login";
import { Signup } from "../Signup";
import { useState } from "react";
import cx from "clsx";
import { OTPTab } from "../OTPTab";
import { SignupErrorDialog } from "../SignupErrorDialog";

export const AuthTabs = ({ ...signupHook }: any) => {
  const [activeTab, setActiveTab] = useState<string | null>("login");
  return (
    <>
      <Tabs color="red" value={activeTab} onChange={setActiveTab}>
        <Tabs.List justify="center">
          <Tabs.Tab
            value="login"
            className={cx("text-[1rem]", {
              "text-[#f21616] font-bold": activeTab === "login",
            })}
          >
            Login
          </Tabs.Tab>
          <Tabs.Tab
            value="signup"
            className={cx("text-[1rem]", {
              "text-[#f21616] font-bold": activeTab === "signup",
            })}
          >
            Signup
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel color="red" value="login">
          <Login />
        </Tabs.Panel>

        <Tabs.Panel value="signup">
          {signupHook?.showOTPModalFlag ? (
            <OTPTab {...signupHook} />
          ) : (
            <Signup {...signupHook} />
          )}
        </Tabs.Panel>
      </Tabs>
      <SignupErrorDialog
        show={signupHook?.showSignupError}
        setShowSignupError={signupHook?.setShowSignupError}
        handleSignupAbort={signupHook?.handleSignupAbort}
      />
    </>
  );
};
