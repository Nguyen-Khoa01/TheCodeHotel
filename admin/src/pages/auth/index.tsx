import { AuthPage as AntdAuthPage, AuthProps } from "@refinedev/antd";
import { Link } from "react-router-dom";

const authWrapperProps = {
  style: {
    background:
      "radial-gradient(50% 50% at 50% 50%,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0.5) 100%),url('https://de-java-hotel-bandung.booked.net/data/Photos/OriginalPhoto/8926/892625/892625758/De-Java-Hotel-Bandung-Exterior.JPEG')",
    backgroundRepeat: 'no-repeat',

  },
};

const renderAuthContent = (content: React.ReactNode) => {
  return (
    <div
      style={{
        maxWidth: 408,
        margin: "auto",
      }}
    >
      <Link to="/">
        <img
          style={{ marginBottom: 26 }}
          src="https://htmldesigntemplates.com/html/travelin/images/logo.png"
          alt="Logo"
          width="100%"
        />
      </Link>
      {content}
    </div>
  );
};

export const AuthPage: React.FC<AuthProps> = ({ type, formProps }) => {
  return (
    <AntdAuthPage
      type={type}
      wrapperProps={authWrapperProps}
      renderContent={renderAuthContent}
      formProps={formProps}
    />
  );
};
