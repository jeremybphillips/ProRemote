
function getSlidesFromResponse(slideGroups) {
    return slideGroups.reduce((acc, curr) => {
        return [...acc, ...curr.groupSlides];
    }, []);
}

class ProPresenterService {
    constructor() {
        this.password = null;
        this.socket = null;
        this.currentPresentation = '';
    }

    // get currentPresentation() {
    //     return this.currentPresentation;
    // }

    // set currentPresentation(pres) {
    //     this.currentPresentation = pres;
    // }

    checkSocket() {
        let ready = true;

        if (!this.socket) {
            console.error('SOCKET NOT CONNECTED');
            ready = false;
        }
        if (this.socket.readyState != 1) {
            console.error('SOCKET NOT READY');
            ready = false;
        }

        return ready;
    }

    emit(obj) {
        const json = JSON.stringify(obj);
        if (this.checkSocket()) {
            return new Promise((res, rej) => {
                this.socket.onmessage = this.handleMessage(res, rej);
                this.socket.send(json);
            });
        }

        console.error('SOCKET EMIT FAILED');

        return false;
    }

    connect(remoteIp = '', password = 'control', port = 50001) {
        this.password = password;

        if(!remoteIp) {
            console.error('REMOTE IP MUST BE SET BEFORE CONNECTING');
            return;
        }

        this.socket = new WebSocket(`ws://${remoteIp}:${port}/remote`);
        this.listen();
    }

    listen() {
        const me = this;

        this.socket.onopen = function() {
            me.authenticate().then(() => {
                window.onbeforeunload = () => {
                    this.socket.close();
                };
            });
        };

        this.socket.onerror = function(err) {
            console.error('WebSocket error:', err);
        };

        this.socket.onclose = function() {
            console.log('WebSocket closed.');
            this.socket = null;
        };
    }

    handleMessage(res, rej) {
        return (event) => {
            const msg = JSON.parse(event.data);

            switch (msg.action) {
            case 'authenticate':
                if(msg.error) {
                    console.log(msg.error);
                }

                console.log(`authenticated: ${msg.authenticated === 1 && msg.controller === 1}`);
                res();
                break;
            case 'libraryRequest':
                res(msg.library);
                break;
            case 'playlistRequestAll':
                res(msg.playlistAll);
                break;
            case 'presentationSlideIndex':
                res(msg.slideIndex);
                break;
            case 'presentationTriggerIndex':
                res(msg.slideIndex, msg.presentationPath);
                break;
            case 'presentationCurrent':
                res({
                    name: msg.presentation.presentationName,
                    slides: getSlidesFromResponse(msg.presentation.presentationSlideGroups)
                });
                break;
            }
        };
    }

    authenticate() {
        return this.emit({
            action: 'authenticate',
            protocol: '600',
            password: this.password
        });
    }

    getLibrary() {
        const library = localStorage.getItem('library');

        if(library) {
            return Promise.resolve(JSON.parse(library));
        }

        return this.emit({
            action: 'libraryRequest'
        }).then((data) => {
            localStorage.setItem('library', JSON.stringify(data));
            return data;
        });
    }

    getPresentation(path) {
        return this.emit({
            action: 'presentationRequest',
            presentationPath: path,
            presentationSlideQuality: 25
        });
    }

    getCurrentPresentation() {
        return this.emit({
            action: 'presentationCurrent',
            presentationSlideQuality: 25
        });
    }

    getCurrentSlide() {
        return this.emit({ action: 'presentationSlideIndex' });
    }

    triggerSlide(n, path) {
        return this.emit({
            action: 'presentationTriggerIndex',
            slideIndex: n,
            presentationPath: path
        });
    }
}

export default new ProPresenterService();