import {
  ArrowUpIcon,
  BellIcon,
  ChartBarIcon,
  CreditCardIcon,
  DocumentSearchIcon,
  ExternalLinkIcon,
  HomeIcon,
  MailIcon,
} from "@heroicons/react/solid";
const Sidebar = () => {
  return (
    <div className="bg-slate-800  flex-none w-14 sm:w-20 h-screen">
      <div className="h-20 items-center flex">
        <a href="/">
          <HomeIcon className="text-slate-50 left-3 sm:left-4 fixed w-8 lg:hover:scale-110 sm:w-10 " />
        </a>
      </div>
      <div className="fixed left-3 sm:left-4 top-24">
        <a href="/">
          <ChartBarIcon
            className="p-1 sm:p-2 lg:hover:scale-110
        bg-slate-500 rounded-md mb-4 text-slate-50 w-8 sm:w-10"
          />
        </a>
        <a href="/">
          <DocumentSearchIcon
            className="p-1 sm:p-2 lg:hover:scale-110
        bg-slate-500 rounded-md mb-4 text-slate-50 w-8 sm:w-10"
          />
        </a>
        <a href="/">
          <MailIcon
            className="p-1 sm:p-2 lg:hover:scale-110
        bg-slate-500 rounded-md mb-4 text-slate-50 w-8 sm:w-10"
          />
        </a>
        <a href="/">
          <CreditCardIcon
            className="p-1 sm:p-2 lg:hover:scale-110
        bg-slate-500 rounded-md mb-4 text-slate-50 w-8 sm:w-10"
          />
        </a>
        <a href="/">
          <BellIcon
            className="p-1 sm:p-2 lg:hover:scale-110
        bg-slate-500 rounded-md mb-4 text-slate-50 w-8 sm:w-10"
          />
        </a>
      </div>
      <div className="fixed bottom-4 left-3 sm:left-4">
        <a href="#top">
          <ArrowUpIcon
            className="p-1 sm:p-2 lg:hover:scale-110
        bg-slate-500 rounded-md mb-4 text-slate-50 w-8 sm:w-10"
          />
        </a>
        <a href="/">
          <ExternalLinkIcon
            className="p-1 sm:p-2 lg:hover:scale-110
        bg-slate-500 rounded-md mb-4 text-slate-50 w-8 sm:w-10"
          />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
