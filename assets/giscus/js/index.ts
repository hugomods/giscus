class Giscus {
    setTheme(theme: string) {
        const frames = document.querySelectorAll<HTMLIFrameElement>(
            'iframe.giscus-frame'
        )

        frames.forEach((frame: HTMLIFrameElement) => {
            if (!frame.contentWindow) {
                return
            }

            const endpoint = (new URL(frame.src)).origin;
            frame.contentWindow.postMessage(
                {
                    giscus: {
                        setConfig: {
                            theme: `${endpoint}/themes/${theme}.css`,
                        },
                    },
                },
                endpoint
            );
        })
    }
}

export default Giscus;
