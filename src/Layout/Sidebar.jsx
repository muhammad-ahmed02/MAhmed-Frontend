import Nav from "./Nav";

const Sidebar = ({ children, closeSidebar }) => {
  return (
    <>
      <div className="sidebar-panel">
        <div className="close-sidebar-btn">
          <svg
            onClick={() => {
              closeSidebar();
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#fff"
            className="bi bi-x"
            viewBox="0 0 12 12"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        <div className="main-sidebar">
          <Nav />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
