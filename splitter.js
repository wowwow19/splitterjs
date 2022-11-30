class Splitter {

    constructor(config) {
        this.direction   = config.direction     || false;
        this.width       = config.width         || "100%";
        this.firstPanel  = config.firstPanel;
        this.secondPanel = config.secondPanel;
    }

    get direction() { return this._direction; }
    set direction(value) {
        if (typeof value !== 'boolean') {
            throw new Error('Invalid direction');
        } else {
            this._direction = value; 
        }
    }
    get width() { return this._width; }
    set width(value) { this._width = value; }
    get firstPanel() { return this._firstPanel; }
    set firstPanel(value) { 
        if (value) {
            this._firstPanel = value;
        } else {
            throw new Error('No FirstPanel');
        }

        if (!this._firstPanel.id) {
            throw new Error('No FirstPanel Id');
        }
    }
    get secondPanel() { return this._secondPanel; }
    set secondPanel(value) { 
        if (value) {
            this._secondPanel = value;
        } else {
            throw new Error('No SecondPanel');
        }

        if (!this._secondPanel.id) {
            throw new Error('No SecondPanel Id');
        }
    }

    init() {
        alert("work");
    }
}