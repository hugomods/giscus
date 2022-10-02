class Giscus {
    private endpoint = ''

    constructor(endpoint: string) {
        this.endpoint = endpoint.replace(/\/$/, '')
    }

    setTheme(theme: string) {
        const iframe = document.querySelector<HTMLIFrameElement>(
            'iframe.giscus-frame'
        )

        if (!iframe || !iframe.contentWindow) {
            console.error('[giscus] iframe not found.')
            return
        }

        iframe.contentWindow.postMessage(
            {
                giscus: {
                    setConfig: {
                        theme: `${this.endpoint}/themes/${theme}.css`,
                    },
                },
            },
            this.endpoint
        );
    }
}

export default Giscus;
