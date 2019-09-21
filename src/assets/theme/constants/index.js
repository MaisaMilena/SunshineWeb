/* eslint-disable no-undef */
export const constants = {
  TELEGRAM_BOT_API_URL: `https://api.telegram.org`,
  TELEGRAM_BOT_API_KEY: `bot983779485:AAEQscM_Lbr8XLTxD15BqhvG5aJPxjm7iFQ`,
  TELEGRAM_BOT_DEFAULT_CHAT_ID: `-250860124`,
  appBackgroundColor: `#F2F2F2`,
  primary: `#D96150`,
  primaryLight: `#F28272`,
  cyan: `#00AA9B`,
  secondary: `#393C40`,
  darkLighted: `#D6D6D6`,
  lightning: `#A0A1A3`,
  lightest: `#7F8386`,
  lighter: `#E4E4E4`,
  light: `#515357`,
  white: `#fff`,
};

export const styles = {
  h3: {
    margin: 1,
    color: constants.secondary,
    opacity: 0.87,
    fontWeight: `bold`,
    lineHeight: 1.2,
    fontSize: 36,
  },
  h5: {
    lineHeight: 0.2,
    textAlign: `center`,
    textTransform: `uppercase`,
  },
  header: {
    display: `flex`,
    justifyContent: `center`,
    height: 700,
  },
  headerLeftSideBox: {
    flex: 0.5,
    alignContent: `flex-end`,
    justifyContent: `flex-end`,
    marginTop: `3.78%`,
  },
  headerRightSideBox: {
    flex: 1,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
  },
  headerBackgroundImageContainer: {
    width: `100%`,
    alignItems: `flex-end`,
    display: `flex`,
  },
  headerBackgroundImageBox: {
    backgroundSize: `90%`,
    backgroundRepeat: `no-repeat`,
    flex: 1,
    marginTop: 40,
    marginLeft: 100,
    minHeight: 700,
  },
  menu: {
    display: `flex`,
    justifyContent: `flex-end`,
    marginRight: `15.46%`,
    marginTop: `10.78%`,
  },
  menuButton: {
    fontStyle: `normal`,
    fontWeight: 500,
    fontSize: 20,
    display: `flex`,
    alignItems: `center`,
    letterSpacing: `0.7px`,
    textTransform: `lowercase`,
    textDecoration: `none`,
    marginLeft: 25,
    cursor: `pointer`,
    color: constants.secondary,
  },
  centeredContainer: {
    display: `flex`,
    justifyContent: `center`,
    textAlign: `center`,
    marginTop: 50,
  },
  contentBox: {
    width: 350,
    height: 240,
    borderRadius: 32,
    justifyContent: `center`,
    alignItems: `center`,
    alignContent: `center`,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 26,
  },
  contentBoxTextItem: {
    fontWeight: `bolder`,
    fontSize: 32,
    fontStyle: `normal`,
  },
  contentBoxText: {
    fontSize: 16,
    fontStyle: `normal`,
    fontWeight: `normal`,
    color: constants.light,
  },
  circledBox: {
    width: 109,
    height: 109,
    borderRadius: `100%`,
    display: `grid`,
  },
  defaultBox: {
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    textAlign: `cover`,
    backgroundRepeat: `no-repeat`,
  },
  defaultButton: {
    borderRadius: 4,
    marginTop: 40,
    backgroundColor: constants.cyan,
    textAlign: `center`,
    width: 126,
    letterSpacing: 0.285714,
    fontSize: 16,
    fontWeight: `normal`,
    color: constants.white,
    height: 50,
    opacity: 0.87,
    cursor: `pointer`,
  },
  retangleBox: {
    backgroundColor: constants.lighter,
    borderRadius: 26,
    width: 255,
    height: 102,
  },
  advisorsTitleAndCompany: {
    color: constants.light,
    fontSize: 12,
    fontWeight: `bold`,
    letterSpacing: `-0.1px`,
  },
  teamMemberBox: {
    textAlign: `center`,
    marginLeft: 15,
    marginRight: 15,
  },
  teamMemberNameText: {
    fontSize: 24,
    fontWeight: `bold`,
    color: constants.light,
  },
  teamMemberResume: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 15,
  },
  textInput: {
    backgroundColor: `inherit`,
    display: `block`,
    marginTop: 20,
    paddingBottom: 10,
  },
  textInputLabel: {
    display: `block`,
    float: `left`,
    fontWeight: `normal`,
    color: constants.secondary,
    opacity: 0.87,
  },
  contactDetailTitle: {
    borderBottom: `1px solid ${constants.lightning}`,
    paddingBottom: 10,
    color: constants.lightning,
    letterSpacing: `2.4px`,
    textTransform: `uppercase`,
    fontSize: 16,
  },
  contactDetailText: {
    borderBottom: `none`,
    color: constants.cyan,
    fontWeight: 600,
    textTransform: `none`,
  },
};
