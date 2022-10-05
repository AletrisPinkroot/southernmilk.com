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
	result.data.allSuburbsCsv.edges.forEach((edge, i) => {
		if (i < 20) {
			setTimeout(async () => {
				let a = await nFetch(
					`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts&exintro=1&explaintext=1&titles=${wikify(
						edge.node.name
					)},_Victoria`,
					{
						// headers: {
						// 	'Api-User-Agent':
						// 		'southern-milk/1.0 (info@southernmilk.com)',
						// },
					}
				).then((f) => f.text());

				try {
					a = JSON.parse(a);
					a = a.query.pages;
					let b = Object.keys(a);
					a = a[b[0]];
					a = a.extract;
					console.log(a);
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
			}, i * 2000);
		}
	});
};
