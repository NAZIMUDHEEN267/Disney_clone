
const fs = require('fs');
const path = require('path');

const delPath = path.join(__dirname, '../', 'build', 'html');

setInterval(() => {
	for (let dir of fs.readdirSync(delPath)) {
		const stat = fs.statSync(delPath + '/' + dir);
		if (stat.isDirectory()) {
			fs.rmdir(delPath + "/" + dir, (error, success) => {
				if (error) {
					const files = fs.readdirSync(delPath + '/' + dir)
					files.forEach(file => {
						fs.rmSync(delPath + "/" + dir + "/" + file);
					});
				}
			});
		}
	}
}, 3000);
