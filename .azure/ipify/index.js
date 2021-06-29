module.exports = async function (context, req) {
	const ip = context.req.headers['x-forwarded-for'].split(':')[0];
	return context.req.query.json === 'true'
		? context.res = {
			headers: {
				'Content-Type': 'application/json'
			},
			body: { ip }
		}
		: context.res = {
			body: ip
		};
}
