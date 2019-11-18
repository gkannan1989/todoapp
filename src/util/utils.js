export const TodoHelper = {
    handleKeyPress : (ev) => {
        if (ev.which === 13 || ev.keyCode === 13) {
            return true
        }
        return false;
    },
    handleInput : (input)  => {
        if(input && input.trim() !== "") {
            return true;
        }
    }
} 