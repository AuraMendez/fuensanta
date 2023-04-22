import { ref } from "vue";

function showAlert() {
    const alert_message = ref(null);

    function show() {
        console.log(alert_message);
    }
    return { alert_message, show }
}

export { showAlert };