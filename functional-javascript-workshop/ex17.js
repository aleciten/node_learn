module.exports = function getDependencies (tree, deps) {
	deps = deps||[];
	if (tree.dependencies) {
		Object.keys(tree.dependencies).forEach(function (key) {
			var dep = tree.dependencies[key];
			var depId = key + '@' + dep.version;
			if (deps.indexOf(depId) < 0) deps.push(depId);
			getDependencies(dep,deps);
		});
	}

	return deps.sort();
};