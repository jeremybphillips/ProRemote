import store from '../store';
import { setConnected } from '../store/actions';

function getSlidesFromResponse(slideGroups) {
    return slideGroups.reduce((acc, curr) => {
        return [...acc, ...curr.groupSlides];
    }, []);
}

class ProPresenterService {
    constructor() {
        this.password = null;
        this.socket = null;
        this.authenticated = false;
    }

    checkSocket() {
        if (!this.socket) {
            console.error('Socket not connected');
            return false;
        }

        if (this.socket.readyState !== 1) {
            console.error('Socket not ready');
            return false;
        }

        return true;
    }

    emit(obj) {
        const json = JSON.stringify(obj);

        return new Promise((res, rej) => {
            if (this.checkSocket()) {
                this.socket.onmessage = this.handleMessage(res, rej);
                this.socket.send(json);
            } else {
                console.error('Socket emit failed');
                rej();
            }
        });
    }

    disconnect() {
        if(this.socket) {
            this.socket.close();
            this.socket = null;
        }

        this.authenticated = false;
        store.dispatch(setConnected(false));
    }

    connect(remoteIp = '', password = 'control', port = 50001) {
        this.password = password;

        if(!remoteIp) {
            const msg = 'REMOTE IP MUST BE SET BEFORE CONNECTING';
            console.error(msg);
            return Promise.reject(new Error(msg));
        }

        return new Promise((res, rej) => {
            const protocol = window.location.protocol.split(':')[0] === 'http' ? 'ws' : 'wss';
            this.socket = new WebSocket(`${protocol}://${remoteIp}:${port}/remote`);
            this.listen(res, rej);
        });
    }

    listen(res, rej) {
        const me = this;

        this.socket.onopen = function() {
            me.authenticate().then(() => {
                this.authenticated = true;
                window.onbeforeunload = () => {
                    this.socket.close();
                };
                res(this.authenticated);
            }).catch((err) => {
                this.authenticated = false;
                rej(err);
            }).finally(() => {
                store.dispatch(setConnected(this.authenticated));
            });
        };

        this.socket.onerror = function(err) {
            //console.error('WebSocket error');
            store.dispatch(setConnected(false));
            rej();
        };

        this.socket.onclose = function() {
            console.log('WebSocket closed.');
            this.socket = null;
            this.authenticated = false;
            store.dispatch(setConnected(false));
        };
    }

    handleMessage(res, rej) {
        return (event) => {
            const msg = JSON.parse(event.data);

            switch (msg.action) {
            case 'authenticate':
                if(msg.error) {
                    rej(msg.error);
                } else {
                    res();
                }

                console.log(`authenticated: ${msg.authenticated === 1 && msg.controller === 1}`);
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
            default:
                rej(`${msg.action} not handled.`);
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
            presentationSlideQuality: 0
        });
    }

    getCurrentPresentation() {
        return this.emit({
            action: 'presentationCurrent',
            presentationSlideQuality: 0
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
