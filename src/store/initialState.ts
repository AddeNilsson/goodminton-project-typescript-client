const initialState = {
  app: {
    isLoading: false,
    loading: 0,
    errors: [],
  },
  auth: {
    isAuthenticated: false,
    user: {
      _id: '',
      username: '',
      email: '',
      name: '',
    },
  },
  player: {
    stats: {
      won: 0,
      lost: 0,
      walkOvers: 0,
      gamesTotal: 0,
      winRatio: 0,
      touched: 0,
    },
  },
  leaderboard: {
    data: [],
  },
  logs: {
    isLoading: false,
    loading: 0,
    playerLogs: [],
    errors: [],
  },
};

export default initialState;
