
function getSlides(slideGroups) {
    return slideGroups.reduce((acc, curr) => {
        return [...acc, ...curr.groupSlides];
    }, []);
}

class ProPresenterService {
    constructor() {
        //this.remoteIp = null;
        //this.port = null;
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
            this.socket.send(json);
        } else {
            console.error('SOCKET EMIT FAILED');
        }
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
            me.authenticate();
        };

        this.socket.onerror = function(err) {
            console.error('WebSocket error:', err);
        };

        this.socket.onclose = function() {
            console.log('WebSocket closed.');
            this.socket = null;
        };

        this.socket.onmessage = function(event) {
            const msg = JSON.parse(event.data);
            //console.log(msg);

            switch (msg.action) {
            case 'authenticate':
                if(msg.error) {
                    console.log(msg.error);
                }

                console.log(`authenticated: ${msg.authenticated === 1 && msg.controller === 1}`);
                break;
            case 'libraryRequest':
                //libraries = msg.library;
                break;
            case 'playlistRequestAll':
                //playlists = msg.playlistAll;
                break;
            case 'presentationSlideIndex':
                //slideIndex = msg.slideIndex;
                break;
            case 'presentationTriggerIndex':
                //slideIndex = msg.slideIndex;
                //activePresentation = msg.presentationPath;

                //document.getElementById("userlistbox").innerHTML = ul;
                break;
            case 'presentationCurrent':
                getSlides(msg.presentation.presentationSlideGroups);
                console.log(getSlides(msg.presentation.presentationSlideGroups));
                break;
            }
        };
    }

    authenticate() {
        this.emit({
            action: 'authenticate',
            protocol: '600',
            password: this.password
        });
    }

    getPresentation(path) {
        this.emit({
            action: 'presentationRequest',
            presentationPath: path,
            presentationSlideQuality: 25
        });
    }
}

export default new ProPresenterService();
