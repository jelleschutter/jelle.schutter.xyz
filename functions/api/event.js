export async function onRequest(context) {
    // proxy to the https://plausible.schutter.xyz/ endpoint
    const { request } = context;
    const url = new URL(request.url);
    url.hostname = 'plausible.schutter.xyz';
    const newRequest = new Request(url, request);
    newRequest.headers.set('Host', 'plausible.schutter.xyz');
    newRequest.headers.set('X-Forwarded-For', request.headers.get('CF-Connecting-IP'));
    newRequest.headers.set('X-Forwarded-Proto', request.headers.get('Scheme'));
    newRequest.headers.set('X-Forwarded-Host', request.headers.get('Host'));

    return await fetch(newRequest)
        .then((response) => {
            return new Response(response.body, response);
        })
        .catch((error) => {
            return new Response(error.message, { status: 500 });
        });
}