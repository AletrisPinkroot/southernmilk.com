const path = require(`path`);
const nFetch = require('node-fetch');
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
	reporter.info(`Suburb pages have been built`);
};

const slugify = (string) => {
	string = string.toLowerCase();
	string = string.replace(' ', '');
	return string;
};

const wikify = (string) => {
	string = string.replace(' ', '_');
	return string;
};
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const suburbTemplate = path.resolve(`src/templates/suburb.tsx`);
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
	result.data.allSuburbsCsv.edges.forEach((edge) => {
		let wait = (r) => new Promise((resolve, r) => setTimeout(resolve, r));
		let a;
		nFetch(
			`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=1&explaintext=1&titles=${wikify(
				edge.node.name
			)},_Victoria`,
			{
				headers: {
					'Api-User-Agent':
						'southern-milk/1.0 (info@southernmilk.com)',
				},
			}
		)
			.then((o) => {
				a = o;
				console.log(a);
			})
			.then(
				createPage({
					path: `suburbs/${slugify(edge.node.name)}`,
					component: suburbTemplate,
					context: {
						title: edge.node.name,
						information: a,
					},
				})
			)
			.then(wait(5000));
	});
};
