function loadUsers(userIds, load, done) {
	var users = [];
	var waitingFor = userIds.length;

	userIds.forEach(function (id, i) {
		load(id, function (user) {
			users[i] = user;

			if (--waitingFor === 0) {
				done(users);
			}
		});
	});
};

module.exports = loadUsers;