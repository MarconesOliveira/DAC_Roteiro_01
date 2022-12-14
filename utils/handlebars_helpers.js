const helpers = {
  isLogged: function (currentUser) {
    return currentUser !== undefined;
  },
  isOwnProfile: function (currentUser, user) {
    if (currentUser === undefined || user === undefined) {
      return false;
    } else {
      return currentUser.id === user.id;
    }
  },
  getName: function (user) {
    return user.name();
  },
  getUsername: function (user) {
    return user.username;
  },
  getCreatedAt: function (user) {
    const date = new Date(user.createdAt);
    return date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();
  },
  getBio: function (user) {
    return user.bio;
  }
}

module.exports = helpers;