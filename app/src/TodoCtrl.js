/**
 * Will be compiled into a function that can take the constructor parameters
 */
class TodoCtrl {

    /**
     * Here you can use inject all the usual stuff, $http, $route...
     */
    constructor(growl) {
        this.growl = growl;

        // Everything living on 'this' will be available to the templates as 'main'
        this.newTodo = '';
        this.items = [new TodoItem('This is a demo todo.', true)];
    }

    /**
     * All methods located on the body of the class will also be available to the named controller
     */
    addTodo() {
        let anItem = new TodoItem(this.newTodo);
        this.growl.addInfoMessage(anItem.toString()+'added', {ttl: 3000});
        this.items.push(anItem);
        this.newTodo = '';
    }

    removeTodo(item) {
        let index = this.items.indexOf(item);
        let anItem = this.items.splice(index, 1);
        this.growl.addWarnMessage(anItem[0].toString()+'removed', {ttl: 3000});
    }

    clearAll() {
        this.items = [];
        this.growl.addErrorMessage('All Clear', {ttl: 3000});
    }

}