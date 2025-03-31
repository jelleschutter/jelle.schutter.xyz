export async function onRequest(context) {
    // proxy to the https://plausible.schutter.xyz/ endpoint
    const { request } = context;
    const url = new URL(request.url);
    url.hostname = 'plausible.schutter.xyz';
    const newRequest = new Request(url, request);
    newRequest.headers.set('Host', 'plausible.schutter.xyz');

    return await fetch(newRequest)
        .then((response) => {
            return new Response(response.body, response);
        })
        .catch((error) => {
            return new Response(error.message, { status: 500 });
        });
}