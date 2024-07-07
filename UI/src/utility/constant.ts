const RentalPropertyCategories = [
  {
    title: "Flat On Rent",
    link: "/rent-flat",
  },
  {
    title: "House On Rent",
    link: "/rent-house",
  },
  {
    title: "Office On Rent",
    link: "/rent-office",
  },
  {
    title: "Open Land / Plot",
    link: "/rent-open-land-plots",
  },
];

const BuyerPropertyCategories = [
  {
    title: "New Constructions",
    link: "/new-constructions",
  },
  {
    title: "Recently Sold",
    link: "/recently-sold",
  },
  {
    title: "Coming Soon",
    link: "/coming-soon",
  },
  {
    title: "Open Land / Plot",
    link: "/open-land-plots",
  },
  {
    title: "Commercial",
    link: "/commercial",
  },
];

const SellersList = [
  { title: "Post A Property For Free", link: "/post-property" },
  { title: "Find A Broker", link: "/find-broker" },
  { title: "Property Valuation", link: "/property-valuation" },
  { title: "Selling FAQs", link: "/selling-faqs" },
];

const BrokersList = [
  { title: "Post A Property For Free", link: "/post-property" },
  {
    title: "Find Clients",
    link: "/find-clients",
  },
  {
    title: "Market Insights",
    link: "/market-insights",
  },
  {
    title: "Connect With Other Brokers",
    link: "/connect-brokers",
  },
];

const HelpList = [
  {
    title: "FAQ",
    link: "/faq",
  },
  {
    title: "Glossary",
    link: "/glossary",
  },
  {
    title: "Contact Support",
    link: "/contact-support",
  },
];

export const TopAreas = [
  {
    title: "Vesu",
    link: "/vesu",
  },
  {
    title: "Althan",
    link: "/althan",
  },
  {
    title: "Adajan",
    link: "/Adajan",
  },
  {
    title: "City Light",
    link: "/city-light",
  },
  {
    title: "Bhatar",
    link: "/bhatar",
  },
];

export const NavigationItems = [
  {
    title: "For Rent",
    hoverCardTitle: "Rent A Home",
    list: RentalPropertyCategories,
    showTopAreas: true,
    showHoverCardFooter: true,
    hoverCardWidth: 600,
  },
  {
    title: "For Buyers",
    hoverCardTitle: "Buy A Home",
    list: BuyerPropertyCategories,
    showTopAreas: true,
    showHoverCardFooter: true,
    hoverCardWidth: 600,
  },
  {
    title: "For Sellers",
    list: SellersList,
    showTopAreas: false,
    showHoverCardFooter: false,
    hoverCardWidth: 240,
  },
  {
    title: "For Brokers",
    list: BrokersList,
    showTopAreas: false,
    showHoverCardFooter: false,
    hoverCardWidth: 260,
  },
  {
    title: "Help",
    list: HelpList,
    showTopAreas: false,
    showHoverCardFooter: false,
    hoverCardWidth: 180,
  },
];
