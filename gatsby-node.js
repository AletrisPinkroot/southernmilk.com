const path = require(`path`);
const nFetch = require('node-fetch');

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
	reporter.info(`Suburb pages have been built`);
};

// Function to turn a string to a simple slug justlikethis
const slugify = (string) => {
	string = string.toLowerCase();
	string = string.replace(' ', '');
	return string;
};

//timeout function to make wait ms, works with async await
function timeout(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

// Function to turn a string to snake case just_Like_This
const wikify = (string) => {
	string = string.replace(' ', '_');
	return string;
};

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const suburbTemplate = path.resolve(`src/templates/suburb.tsx`);
	//Get every line from suburbs.csv
	const result = await graphql(`
		query {
			allSuburbsCsv {
				edges {
					node {
						name
					}
				}
			}
		}
	`);

	const promises = result.data.allSuburbsCsv.edges.map(async (edge, i) => {
		//Timeout to do stuff
		await timeout(i * 1500);
		//Fetch wikipedia intro section from each page
		let a = await nFetch(
			`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts&exintro=1&explaintext=1&titles=${wikify(
				edge.node.name
			)},_Victoria`
		).then((f) => f.text());

		//Put this in a try/catch in case wikipedia spits out an error.
		// Actual code is just getting the important information from the API.
		try {
			a = JSON.parse(a);
			a = a.query.pages;
			let b = Object.keys(a);
			a = a[b[0]];
			a = a.extract;
			console.log(`${edge.node.name} built: ${a.slice(0, 50)}`);
		} catch (error) {
			console.log(edge.node.name + ' no work');
		}

		await createPage({
			path: `suburbs/${slugify(edge.node.name)}`,
			component: suburbTemplate,
			context: {
				title: edge.node.name,
				info: a,
			},
		});
	});

	//return all promises so it works
	await Promise.all(promises);
};
