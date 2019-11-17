var TodoHelper = {
    handleKeyPressEvent : (event) => {
        if (event.which === 13 || event.keyCode === 13) {
            return true
        }
        return false;
    },
    validateInput : (input)  => {
        if(input && input.trim() != "") {
            return true;
        }
    }
}
export default TodoHelper;