export class BaseAnnotation {
    constructor (name) {
        this.name = name;
    }
}

export class Service extends BaseAnnotation {
    constructor (name) {
        super(name);
    }
}

export class Controller extends BaseAnnotation {
    constructor (name) {
        super(name);
    }
}

export class Inject {
    constructor (...dependencies) {
        this.dependencies = dependencies;
    }
}
